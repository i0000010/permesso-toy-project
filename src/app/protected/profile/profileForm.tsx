'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { useMutation } from '@apollo/client';
import { CreateProfileMutation, CreateProfileMutationVariables, CreateProfileDocument } from '@/generated/graphql';
import { useAuth } from "@/context/AuthContext";
import { useViewer } from "@/context/ViewerContext";
import { Viewer } from "@/context/ViewerContext";
import { set } from 'firebase/database';


const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
});

const ProfileForm = () => {

  const { setViewer } = useViewer();
  const { user } = useAuth();
  const [createProfile] = useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument);

  if (!user) {
    return <p>Not logged in</p>;
  }

  return (
    <Formik
      initialValues={{
        username: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log('user: ', user)
        const response = await createProfile({
          variables: {
            user_id: user!.uid,
            username: values.username,
          }
        });
        setViewer(response.data?.insert_profiles_one as Viewer);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7">Create Profile</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
              <div className="sm:col-span-4">
                <label htmlFor="username" className={clsx(
                    "block text-sm font-medium leading-6",
                    {'text-red-500': errors.username && touched.username}
                  )}
                >
                  Username
                </label>
              <div className="mt-2">
                <Field type="text" name="username" className={clsx(
                    (errors.username && touched.username ? 'ring-red-500' : 'ring-gray-300 dark:ring-gray-700'),
                    "form-control flex rounded-md border-0 bg-white dark:bg-gray-700 py-1.5 pr-3 text-gray-900 dark:text-gray-300 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  )}
                />
                <ErrorMessage name="username" component="div" className="text-danger text-red-500 mt-2 text-sm" />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit" className="text-sm font-semibold leading-6" disabled={isSubmitting}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ProfileForm;