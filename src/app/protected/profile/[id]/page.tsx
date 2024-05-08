'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GetUserByIdQuery, GetUserByIdQueryVariables, GetUserByIdDocument } from '@/generated/graphql';

interface ProfileProps {
  uid: string;
}

const Profile: React.FC<ProfileProps> = ({ uid }) => {
  console.log('profile uid: ', uid)

  const { data, loading, error } = useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, {
    variables: {
      id: uid,
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-4">
      <h1>Profile</h1>
      <p>Username: {data?.users_by_pk?.username}</p>
    </main>
  )
}

export default Profile;