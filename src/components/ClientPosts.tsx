"use client";
import React from "react";
import { useSubscription } from "@apollo/client";
import { ListPostsSubscription, ListPostsDocument } from '@/generated/graphql';
import Link from "next/link";
import Post from "@/components/Post";
import { useViewer } from "@/context/ViewerContext";

// export async function getServerSideProps() {
//     const data = useQuery<ListPostsQuery>(ListPostsDocument);


const Posts = () => {
  const { data, loading, error } = useSubscription<ListPostsSubscription>(ListPostsDocument);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <p>No data</p>;

  return (
    <ul role="list" className="divide-y divide-gray-200 dark:divide-none">
      {data.posts.map((post, postId) => (
        <li key={post.id} className="relative flex gap-x-4">
          <Link className='w-full' href={`/posts/${post.id}`}>
            <Post post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
