import React, { useEffect, useState } from "react";

import CommentApi from "../../api/CommentApi";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentsPage ({postId,user}) {

    const [ comments, setComments] = useState([]); // All comments for this post

    console.log(comments);
    function getAllComments() {
        CommentApi.getAllCommentsByPostId(postId)
            .then((res) => {
                const newComments = [...comments]
                newComments.push(res.data)
                setComments(newComments);
            })
    }

    useEffect(() => {
        getAllComments();
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
            <CommentForm getAllComments={getAllComments} user={user}/>
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