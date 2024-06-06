"use client";
import React from "react";
import { GetPostSubscription } from "@/generated/graphql";

import Comment from "@/components/Comment";


interface CommentsProps {
    comments: NonNullable<GetPostSubscription["posts_by_pk"]>["comments"];
}


function markupComments(comments: NonNullable<GetPostSubscription["posts_by_pk"]>["comments"]): React.ReactNode[] {

    interface Thread {
      [key: number]: React.ReactNode[];
    }
    const threads: Thread = {};
    const root: React.ReactNode[] = [];
  
    // iterate over comments in reverse order
    for (let i = comments.length - 1; i >= 0; i--) {
      const comment = comments[i];
  
      if (comment.id in threads) {
        const children = threads[comment.id];
        delete threads[comment.id];
        const commentNode = <Comment comment={comment}><div className="pl-6">{children}</div></Comment>;
        
        if (comment.parent_comment_id) {
            if (comment.parent_comment_id in threads) {
                threads[comment.parent_comment_id].push(commentNode);
            } else {
                threads[comment.parent_comment_id] = [commentNode];
            }
        } else {
            root.push(commentNode);
        }

      } else if (comment.parent_comment_id) {
        const commentNode = <Comment comment={comment} />;
        if (comment.parent_comment_id in threads) {
          threads[comment.parent_comment_id].push(commentNode);
        } else {
          threads[comment.parent_comment_id] = [commentNode];
        }
      } else {
        root.push(<Comment comment={comment} />);
      }
    }
    
    for (const key in threads) {
      root.push(threads[key]);
    }
    return root;
  }


const Comments: React.FC<CommentsProps> = ({ comments }) => {

    return (
        <div>
            {markupComments(comments)}
        </div>
    )
}

export default Comments