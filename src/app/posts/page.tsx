'use client'

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client'
import { CreatePostMutation, CreatePostMutationVariables, CreatePostDocument } from '@/generated/graphql'
import { useViewer } from '@/context/ViewerContext';
import clsx from 'clsx';

export default function PostPage() {
  const router = useRouter();
  const { viewer } = useViewer();
  const [createPost] = useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);

  if (!viewer) {
    router.push('/protected/profile')

    return (
      <div>
        <h1>Not authenticated</h1>
      </div>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 dark:bg-black-100" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <div className="mx-auto max-w-sm rounded bg-gray-100 dark:bg-gray-800 p-4">
          <Formik
            initialValues={{
              title: "",
              body: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string().required('Required'),
              body: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              createPost({
                variables: {
                  title: values.title,
                  body: values.body,
                  profile_id: viewer!.id,
                }
              });
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <label htmlFor="comment" className="block text-sm font-medium leading-6">
                  New Post
                </label>
                <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-0 shadow-sm focus-within:border-blue focus-within:ring-1 focus-within:ring-blue">
                  <label htmlFor="title" className="sr-only">Title</label>
                  <Field type="text" name="title" placeholder="Title" className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0 bg-white dark:bg-gray-700" />
                  <ErrorMessage name="title" component="div" />
                  <div>
                    <label htmlFor="body" className="sr-only">Body</label>
                    <Field as="textarea" name="body" placeholder="Body" className="block w-full resize-none border-0 py-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-white dark:bg-gray-700" />
                    <ErrorMessage name="body" component="div" />
                  </div>


                  <div className="flex items-center justify-between space-x-3 border-t border-gray-200 dark:border-0 px-2 py-2 sm:px-3">
                    <div className="flex">
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        className="inline-flex items-center rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => {
                          router.back()
                        }}
                      >
                        Close modal
                      </button>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        onClick={() => {
                          router.back()
                        }}
                        className="inline-flex items-center rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Publish
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </>
  )
}