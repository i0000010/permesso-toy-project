'use client';

import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import type { GetPostQuery } from '@/generated/graphql';
import { CommentOnPostMutation, CommentOnPostDocument, CommentOnPostMutationVariables } from "@/generated/graphql";

// import firebase user type
import type { User } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserAuth } from "@/context/AuthContext";
import * as Yup from 'yup';
import clsx from 'clsx';

interface RespondToCommentProps {
    user: User;
    comment: NonNullable<GetPostQuery["posts_by_pk"]>["comments"][0];
};

const RespondToComment: React.FC<RespondToCommentProps> = ({ user, comment }) => {

    const [createComment] = useMutation<CommentOnPostMutation, CommentOnPostMutationVariables>(CommentOnPostDocument);

    return (
        <div>
            <Formik
                initialValues={{
                    body: "",
                }}
                validationSchema={Yup.object({
                    body: Yup.string().required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    // create a new comment on this post
                    createComment({
                        variables: {
                            body: values.body,
                            post_id: comment.post_id,
                            parent_comment_id: comment.id,
                            user_id: user.uid
                        }
                    });
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-0 shadow-sm focus-within:border-blue focus-within:ring-1 focus-within:ring-blue">
                            <label htmlFor="body" className="sr-only">Body</label>
                            <Field as="textarea" rows="3" name="body" placeholder="Comment" className="block w-full border-0 pt-2.5 text-md font-medium placeholder:text-gray-400 focus:ring-0 bg-white dark:bg-gray-700" />
                            <ErrorMessage name="body" component="div" />
                        </div>
                        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 dark:border-0 px-2 py-2 sm:px-3">
                            <div className="flex">
                            </div>
                            <div className="flex-shrink-0">
                                <button type="submit" className={clsx("inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", isSubmitting && "opacity-50 cursor-not-allowed")}>
                                    Add response
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
 
export interface CommentProps {
    comment: NonNullable<GetPostQuery["posts_by_pk"]>["comments"][0];
    children?: React.ReactNode;
}

const Comment: React.FC<CommentProps> = ({ comment, children }) => {

    const { user } = UserAuth();

    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:px-6 rounded-md my-2 w-full">
                <div className="flex space-x-3">
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold">
                            {comment.user?.username}
                        </p>
                        <p>{comment.created_at.slice(0, 10)}</p>
                    </div>
                </div>
                <div>
                    <p className="mt-2 text-xl">{comment.body}</p>
                    {/* // add a button at the bottom right that when clicks reveals a form to respond to this comment */}
                    <div className="flex justify-end">
                        <button
                            className="text-sm text-blue-500 hover:text-blue-700"
                            onClick={() => setShowForm(!showForm)}
                        >Respond
                        </button>
                    </div>
                    {showForm && user && <RespondToComment user={user} comment={comment} />}


                </div>
            </div>
            {children}
        </div>
    )
}

export default Comment;