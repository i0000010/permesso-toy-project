'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GetUserByIdQuery, GetUserByIdQueryVariables, GetUserByIdDocument } from '@/generated/graphql';
// import firebase user type
import type { User } from 'firebase/auth';

interface ProfileDetailsProps {
    user: User;
}
const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => {
    const { data, loading, error } = useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, {
        variables: {
            id: user.uid as string,
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <main className="p-4">
            <h1>Profile</h1>
            <p>Username: {data?.users_by_pk?.username}</p>
        </main>
    );
}

export default ProfileDetails;