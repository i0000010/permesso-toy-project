// import type { Pinecone } from '@pinecone-database/pinecone';

// export const createPineconeIndex = async (client: Pinecone, indexName: string) => {

//     const existingIndexes = await client.listIndexes();

//     if (existingIndexes.includes(indexName)) {
//         console.log(`Index ${indexName} already exists`);
//         return;
//     }
//     await client.createIndex({
//         name: indexName,
//         dimension: 1536,
//         metric: 'cosine',
//         spec: {
//             serverless: {
//                 cloud: 'aws',
//                 region: 'us-east-1',
//             }
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
// }