'use client';
import React from 'react';
import { ListPostsSubscription } from "@/generated/graphql";
import { useViewer } from "@/context/ViewerContext";
import { useMutation } from "@apollo/client";
import { 
  VoteOnPostMutation, VoteOnPostDocument, VoteOnPostMutationVariables,
  DeleteVoteOnPostMutation, DeleteVoteOnPostDocument, DeleteVoteOnPostMutationVariables
 } from '@/generated/graphql';
import Link from "next/link";
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

interface PostProps {
    post: NonNullable<ListPostsSubscription["posts"]>[0];
}


const Post: React.FC<PostProps> = ({ post }) => {

  const { viewer } = useViewer();
  const [castVote] = useMutation<VoteOnPostMutation, VoteOnPostMutationVariables>(VoteOnPostDocument);
  const [deleteVote] = useMutation<DeleteVoteOnPostMutation, DeleteVoteOnPostMutationVariables>(DeleteVoteOnPostDocument);

    return (
        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:px-6 rounded-md my-2 w-full">
          <div className="flex justify-between">
            <div className="flex space-x-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">
                    <Link href="#" className="hover:underline">
                      {post.profile.username}
                    </Link>
                </p>
                <p>{post.created_at.slice(0, 10)}</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                {viewer ?
                  <>
                    <button
                      onClick={(event) => {
                        event?.preventDefault();
                        viewer && post.votes.find(vote => vote.profile_id === viewer.id && vote.value === 1) ? 
                        deleteVote({
                          variables: {
                            profile_id: viewer.id,
                            post_id: post.id!
                          }
                        }) :
                        castVote({
                          variables: {
                            profile_id: viewer.id,
                            post_id: post.id!,
                            value: 1
                          }
                        })
                      }}
                    >
                      <ChevronUpIcon
                        className={clsx("h-5 w-5",
                          viewer && post.votes.find(vote => vote.profile_id === viewer.id && vote.value === 1) ? "text-green-500" : "text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                      <p className="text-sm">{post.score![0].score}</p>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        viewer && post.votes.find(vote => vote.profile_id === viewer.id && vote.value === -1) ?
                        deleteVote({
                          variables: {
                            profile_id: viewer.id,
                            post_id: post.id!
                          }
                        }) :
                        castVote({
                          variables: {
                            profile_id: viewer.id,
                            post_id: post.id!,
                            value: -1
                          }
                        })
                      }}
                    >
                      <ChevronDownIcon
                        className={clsx("h-5 w-5",
                          viewer && post.votes.find(vote => vote.profile_id === viewer.id && vote.value === -1) ? "text-red-500" : "text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </>
                  :
                  <>
                    <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                    <p className="text-sm">{post.score![0].score}</p>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </>
                }
              </div>
            </div>
          </div>
        <div>
          <p className="mt-2 text-xl">{post.title}</p>
          <p className="mt-3 text-base">{post.body}</p>
        </div>
      </div>
    )
}

export default Post;