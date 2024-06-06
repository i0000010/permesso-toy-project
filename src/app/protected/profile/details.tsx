'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
// import firebase user type
import type { User } from 'firebase/auth';
import { useViewer } from '@/context/ViewerContext';

interface ProfileDetailsProps {
    user: User;
}
const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => {

    const { viewer } = useViewer();

    return (
        <main className="p-4">
            <h1>Profile</h1>
            <p>Username: {viewer?.username}</p>
        </main>
    );
}

export default ProfileDetails;