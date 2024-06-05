import { Pinecone } from '@pinecone-database/pinecone';


// // Initialize Pinecone client
// const pinecone = new PineconeClient({
//   apiKey: process.env.PINECONE_API_KEY,
//   environment: process.env.PINECONE_ENVIRONMENT,
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { text, id } = req.body;

//     // Generate embeddings for the text
//     const embedder = new SentenceTransformer('all-MiniLM-L6-v2');
//     const embeddings = await embedder.encode(text);

//     // Upsert vector to Pinecone
//     await pinecone.upsert({
//       indexName: process.env.PINECONE_INDEX,
//       vectors: [{
//         id: id.toString(),
//         values: embeddings,
//       }],
//     });

//     res.status(200).json({ message: 'Vector stored successfully' });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
