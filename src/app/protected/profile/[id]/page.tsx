import 'server-only';
import React from 'react';

interface ProfileProps {
  uid: string;
}

const Profile: React.FC<ProfileProps> = async ({ uid }) => {
  return (
    <main className="p-4">
      <h1>Profile</h1>
    </main>
  )
}

export default Profile;