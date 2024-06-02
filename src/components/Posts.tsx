import 'server-only';
import React from 'react';
import { getClient } from '@/lib/apollo/server';
import { ListPostsQuery, ListPostsDocument } from '@/generated/graphql';


const Posts = async () => {

    const data = await getClient().query<ListPostsQuery>({
        query: ListPostsDocument,
        fetchPolicy: 'no-cache',
    });

    return (
        <div>
            <p># posts: {data.data.posts.length}</p>
            <p>data: {JSON.stringify(data)}</p>
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