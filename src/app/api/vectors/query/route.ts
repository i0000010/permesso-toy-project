import 'server-only';
import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';
import { Document } from '@langchain/core/documents';
import Joi from 'joi';

const PINECONE_INDEX = 'permesso-toy-app-post-titles';

const schema = Joi.object({
    content: Joi.string().required()
})

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { error, value } = schema.validate(body);
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

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

    const results = await vectorStore.similaritySearch("pinecone", 5);
    return NextResponse.json(results);
}
