'use client';
import React from 'react';
import { GetPostQuery, ListPostsQuery } from "@/generated/graphql";
import Link from "next/link";

interface PostProps {
    post: NonNullable<GetPostQuery["posts_by_pk"]> | ListPostsQuery["posts"][0];
}

const Post: React.FC<PostProps> = ({ post }) => {

    return (
        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:px-6 rounded-md my-2 w-full">
        <div className="flex space-x-3">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">
              <Link href="#" className="hover:underline">
                {post.user.username}
              </Link>
            </p>
            <p>{post.created_at.slice(0, 10)}</p>
          </div>
        </div>
        <div>
          <p className="mt-2 text-xl">{post.title}</p>
          <p className="mt-3 text-base">{post.body}</p>
        </div>
      </div>
    )
}

export default Post;