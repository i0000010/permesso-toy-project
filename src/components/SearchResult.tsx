'use client';
import Link from 'next/link';
import React from 'react';


interface SearchResultProps {
    post_id: number;
    content: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ post_id, content }) => {

    return (
        <Link
            href={`/posts/${post_id}`}
            passHref
            className="block w-full rounded-md border-0 bg-white dark:bg-gray-700 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-300 sm:text-sm sm:leading-6"
        >
            <span>{content}</span>
        </Link>
    )
}

export default SearchResult;