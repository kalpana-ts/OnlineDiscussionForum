import React, { useEffect, useState } from "react";

import CommentApi from "../../api/CommentApi";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentsPage ({post,user}) {

    const [ comments, setComments] = useState([]); // All comments for this post

    function getAllComments(postId) {
        CommentApi.getAllCommentsByPostId(postId)
            .then((res) => {
                //const newComments = [...comments]
                //newComments.push(res.data)
                console.log(res.data);
                //setComments(res.data);
            })
    }

    useEffect(() => {
        getAllComments(post.id);
    }, [])

    // Delete Comment is at this level because if we delete the post directly inside itself, it will generate issues
    function deleteComment(commentId) {
        CommentApi.deleteComment(commentId)
            .then(() => {
                getAllComments(); // to refresh the list immediately
            })
    }
    
    return(
        <div className="CommentsPage">
            <CommentForm post={post} getAllComments={getAllComments} user={user}/>
            <div>
                { comments.length === 0 ? "No comments yet" :
                    comments.map((comment) => 
                        <Comment key={comment.id} comment={comment} user={user} deleteComment={deleteComment}/>
                    )
                }
            </div>
        </div>
    );
}

export default CommentsPage;