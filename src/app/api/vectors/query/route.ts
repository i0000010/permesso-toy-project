import 'server-only';
import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';

const PINECONE_INDEX = 'permesso-toy-app-post-titles';

export async function GET(req: NextRequest, res: NextResponse) {
    const query = req.nextUrl.searchParams.get('query');

    if (!query) {
        return NextResponse.json({ error: 'query parameter is required' }, { status: 400 });
    }
    console.log('query: ', query);
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

    const results = await vectorStore.similaritySearch(query, 5);
    return NextResponse.json(results);
}
