'use client';
import Link from 'next/link';
import React from 'react';

export interface SearchResultProps {
    id: number;
    title: string;
    body: string;
    score: number;
    created_at: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ id, title, body, score, created_at}) => {
    return (
        <Link
            href={`/posts/${id}`}
            passHref
            className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:px-6 rounded-md my-2 w-full"
        >
            <div className="flex space-x-3">
                <div className="min-w-0 flex-1">
                    <p>{created_at}</p>
                </div>
            </div>
            <div>
                <p className="mt-2 text-xl">{title}</p>
                <p className="mt-3 text-base">{body}</p>
            </div>
        </Link>
    )
}

export default SearchResult;