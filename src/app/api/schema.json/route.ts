import 'server-only';
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
    const schema = {
        openapi: '3.0.0',
        info: {
            title: 'permesso',
            version: '1.0.0',
        },
        // servers:
        
    };
    return NextResponse.json(schema);
}