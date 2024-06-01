import 'server-only';
import React from 'react';
import { getClient } from '@/lib/apollo/server';
import { ListPostsQuery, ListPostsDocument } from '@/generated/graphql';


const Posts = async () => {

    const data = await getClient().query<ListPostsQuery>({
        query: ListPostsDocument
    });

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.data.posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;