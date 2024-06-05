'use client';

import React from 'react';
import { UserAuth } from "@/context/AuthContext";
import ProfileDetails from './details';

const Profile: React.FC = () => {
  const { user } = UserAuth();
  return (
    <div>
      {user ? <ProfileDetails user={user} /> : <p>Not logged in</p>}
    </div>
  );
}

export default Profile;