'use client';

import React from 'react';
import { useAuth } from "@/context/AuthContext";
import { useViewer } from "@/context/ViewerContext";
import ProfileDetails from './details';
import ProfileForm from '@/app/protected/profile/profileForm';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const { viewer } = useViewer();

  if (!user) {
    return <p>Not logged in</p>;
  }

  if (!viewer || viewer === null) {
    return (
      <main className="p-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ProfileForm />
          </div>
        </div>
      </main>
    );
  };


  return <ProfileDetails user={user} />;
}

export default Profile;