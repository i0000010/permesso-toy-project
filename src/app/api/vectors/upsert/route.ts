import 'server-only';
import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';
import { Document } from '@langchain/core/documents';
import Joi from 'joi';

const PINECONE_INDEX = 'permesso-toy-app-post-titles';

const EventSchema = Joi.object({
    event: Joi.object({
        op: Joi.string().valid('INSERT').required(),
        data: Joi.object({
            score: Joi.number().integer().required(),
            profile_id: Joi.number().integer().positive().required(),
            id: Joi.number().integer().positive().required(),
            title: Joi.string().required(),
            body: Joi.string().required(),
            created_at: Joi.string().required(),
        }).required(),
        session_variables: Joi.object().optional(),
    }).required(),

    table: Joi.object({
        schema: Joi.string().required(),
        name: Joi.string().required(),
    }).required(),
})

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    console.log(body);
    const { error, value } = EventSchema.validate(body);
    if (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const { event } = value;
    const { data } = event;

    const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
    if (!PINECONE_API_KEY) {
        return NextResponse.json({ error: 'PINECONE_API_KEY is not set'})
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
            post_id: data.id,
        },
        pageContent: data.body,
    })

    const result = await vectorStore.addDocuments([
        document
    ]);

    return NextResponse.json(result);
}