import React, { useEffect, useState } from "react";

import CommentApi from "../../api/CommentApi";


import PostsApi from "../../api/PostsApi";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentsPage ({post,user}) {
    const [ comments, setComments] = useState([]); // All comments for this post
    useEffect(() => {
        getAllComments();
    }, [])

    function getAllComments() {
        CommentApi.getAllCommentsByPostId(post.postId)
            .then((data) => {
                setComments(data.data);
            })
    }

    // Delete Comment is at this level because if we delete the post directly inside itself, it will generate issues
    function deleteComment(commentId) {
        CommentApi.deleteComment(commentId)
            .then(() => {
                getAllComments(); // to refresh the list immediately
            })
    }
    
    return(
        <div className="CommentsPage">
            <CommentForm comments={comments} getAllComments={getAllComments} user={user}/>
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