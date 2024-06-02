'use client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { ListPostsQuery, ListPostsDocument } from '@/generated/graphql';
import Link from 'next/link';
import clsx from 'clsx'


// export async function getServerSideProps() {
//     const data = useQuery<ListPostsQuery>(ListPostsDocument);

const Posts = () => {

    const { data, loading, error } = useQuery<ListPostsQuery>(ListPostsDocument);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!data) return <p>No data</p>;

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-none">
                    {data.posts.map((post, postId) => (
                        <li key={post.id} className="relative flex gap-x-4">
                            <Link
                                className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:px-6 rounded-md my-2 w-full"
                                href={`/posts/${post.id}`}
                            >
                                <div className="flex space-x-3">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold">
                                            <Link href="#" className="hover:underline">
                                                {post.user.username}
                                            </Link>
                                        </p>
                                        <p>
                                            {post.created_at.slice(0,10)}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mt-2 text-xl">
                                        {post.title}
                                    </p>
                                    <p className="mt-3 text-base">
                                        {post.body}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Posts;