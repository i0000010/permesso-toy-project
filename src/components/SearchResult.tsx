'use client';
import Link from 'next/link';
import React from 'react';


interface SearchResultProps {
    post_id: number;
    table: "posts" | "comments";    
    content: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ post_id, table, content }) => {

    return (
        <Link
            href={`/posts/${post_id}`}
            passHref
            className="block w-full rounded-md border-0 bg-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-300 sm:text-sm sm:leading-6"
        >
            <div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" >{table == "posts" ? "Post" : "Comment"}</p>
                <p className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-300 ">{content}</p>
            </div>
        </Link>
    )
}

export default SearchResult;