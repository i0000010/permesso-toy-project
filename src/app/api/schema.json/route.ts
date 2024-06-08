import 'server-only';
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
    const schema = {
        openapi: '3.0.0',
        info: {
            title: 'permesso',
            version: '1.0.0',
        },
        servers: [
            {
                url: `${process.env.NEXT_PUBLIC_API_URL}/api/schema.json`,
                description: 'Development server',
            }
        ],
        paths: {
            '/vectors/upsert': {
                post: {
                    summary: 'Upsert a vector',
                    description: 'Upsert a vector',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/EventSchema',
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: 'Successful response',
                        },
                        400: {
                            description: 'Bad request',
                        },
                    },
                },
            },
            '/vectors/query': {
                post: {
                    summary: 'Query a vector',
                    description: 'Query a vector',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/QuerySchema',
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: 'Successful response',
                        },
                        400: {
                            description: 'Bad request',
                        },
                    },
                },
            },
        },
        components: {
            schemas: {
                EventSchema: {
                    type: 'object',
                    properties: {
                        event: {
                            type: 'object',
                            properties: {
                                data: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                        },
                                        body: {
                                            type: 'string',
                                        },
                                    },
                                    required: ['id', 'body'],
                                },
                            },
                            required: ['data'],
                        },
                    },
                    required: ['event'],
                },
                QuerySchema: {
                    type: 'object',
                    properties: {
                        content: {
                            type: 'string',
                        },
                    },
                    required: ['content'],
                },
            },
        }
        
    };
    return NextResponse.json(schema);
}