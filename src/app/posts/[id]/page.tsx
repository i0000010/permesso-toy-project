"use client";
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GetPostQuery, GetPostDocument, CommentOnPostMutation, CommentOnPostDocument, CommentOnPostMutationVariables } from "@/generated/graphql";
import Post from "@/components/Post";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserAuth } from "@/context/AuthContext";
import * as Yup from 'yup';
import Comments from "@/components/Comments";

interface PostPageProps {
    params: {
        id: string;
    };
}

const PostPage: React.FC<PostPageProps> = ({ params }) => {

    const { data, loading, error } = useQuery<GetPostQuery>(GetPostDocument, {
        variables: {
            id: params.id
        }
    });

    const [createComment] = useMutation<CommentOnPostMutation, CommentOnPostMutationVariables>(CommentOnPostDocument);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!data || !data.posts_by_pk) return <p>No data</p>;

    const { user } = UserAuth();

    return (
        <main className="p-4">
            <div className="w-full">
                <Post post={data.posts_by_pk} />

                {/* {user ?? <Formik} */}
                <Formik
                    initialValues={{
                        body: "",
                    }}
                    validationSchema={Yup.object({
                        body: Yup.string().required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        createComment({
                            variables: {
                                body: values.body,
                                post_id: data.posts_by_pk!.id,
                                user_id: user!.uid
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
                                        Add Comment
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                <Comments comments={data.posts_by_pk.comments} />
            </div>
        </main>
    );
};

export default PostPage;
