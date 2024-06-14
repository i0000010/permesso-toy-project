import 'server-only';
import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';
import { Document } from '@langchain/core/documents';
import Joi from 'joi';

const PINECONE_INDEX = 'permesso-toy-app-post-titles';

const PostSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
    score: Joi.number().integer().optional(),
    created_at: Joi.string().optional(),
    profile_id: Joi.number().integer().positive().optional(),
})

const CommentSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    post_id: Joi.number().integer().positive().required(),
    parent_comment_id: Joi.number().integer().positive().allow(null),
    body: Joi.string().required(),
    score: Joi.number().integer().optional(),
    accepted_answer: Joi.boolean().optional(),
    created_at: Joi.string().optional(),
    profile_id: Joi.number().integer().positive().optional(),
})

const EventSchema = Joi.object({
    event: Joi.object({
        op: Joi.string().valid('INSERT').required(),
        data: Joi.alternatives().try(PostSchema, CommentSchema).required(),
        session_variables: Joi.object().optional(),
    }).required(),

    table: Joi.object({
        schema: Joi.string().valid('public').required(),
        name: Joi.string().valid('posts', 'comments').required(),
    }).required(),
})

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    console.log(body);

    console.log('data: ', body.event.data);
    const { error, value } = EventSchema.validate(body);
    if (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const { event } = value;
    const { data } = event;
    const { table } = value;

    const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
    if (!PINECONE_API_KEY) {
        return NextResponse.json({ error: 'PINECONE_API_KEY is not set'}, { status: 500 })
    }
    
    const pinecone = new Pinecone({ apiKey: PINECONE_API_KEY });
    await pinecone.createIndex({
        name: PINECONE_INDEX,
        dimension: 1536,
        metric: 'cosine',
        spec: {
            serverless: {
                cloud: 'aws',
                region: 'us-east-1',
            }
        }
    }).catch((error) => {
        console.error(error);
    });

    const index = pinecone.Index(PINECONE_INDEX);

    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex: index }
    );

    const document = new Document({
        metadata: {
            post_id: table.name === 'posts' ? data.id : data.post_id,
            table: table.name,
        },
        pageContent: data.body,
    })

    const result = await vectorStore.addDocuments([
        document
    ]);

    return NextResponse.json(result);
}