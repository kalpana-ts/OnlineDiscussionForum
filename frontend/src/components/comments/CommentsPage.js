import React, { useEffect, useState } from "react";
import CommentApi from "../../api/CommentApi";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentsPage ({post,user}) {

    const [ comments, setComments] = useState([]);

    useEffect(() => {
        getAllComments();
    }, [])

    function getAllComments() {
        console.log("from commentsP:" + post.id);
        CommentApi.getAllCommentsByPostId(post.id)
            .then((c) => {
                // const newComments = [...comments]
                // newComments.push(c.data)
                setComments(c.data);
            })
            // console.log("from getallbypost",comments);
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