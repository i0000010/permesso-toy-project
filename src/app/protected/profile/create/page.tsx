'use client';
import ProfileForm from '@/app/protected/profile/profileForm';

const CreateProfilePage = () => {
  return (
    <main className="p-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ProfileForm />
        </div>
      </div>
    </main>
  )
}

export default CreateProfilePage;