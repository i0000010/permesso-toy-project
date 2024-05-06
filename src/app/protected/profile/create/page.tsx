'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CreateProfilePage = () => {
  return (
    <main className="p-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Formik
            initialValues={{
              username: "",
            }}
            validate={values => {
              const errors: any = {};
              if (!values.username) {
                errors.username = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7">Create Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
                    <div className="sm:col-span-4">
                      <label htmlFor="username" className="block text-sm font-medium leading-6">
                        Username
                      </label>
                    <div className="mt-2">
                      <Field type="text" name="username" className="form-control flex rounded-md border-0 bg-white dark:bg-gray-700 py-1.5 pr-3 text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6" />
                      <ErrorMessage name="username" component="div" className="text-danger text-red-500 mt-2" />
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
        </div>
      </div>
    </main>
  )
}

export default CreateProfilePage;