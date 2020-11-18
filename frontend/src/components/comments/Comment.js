import React from "react";

function Comment({comment, deleteComment, user}) {
  
    return (
        
        <div className="card mt-3">
            <div className="card-body">
                <p>
                        Comment : {comment.commentBody} <br/>
                        WrittenBy : {comment.user.name}
                </p>
                
                {(user.name === comment.user.name)?
                    <button
                        className="btn btn-danger mr-sm-2"
                        onClick={() => deleteComment(comment.id)}
                    >Delete</button> 
                    : null } 
                
            </div>
        </div>
    );
}

export default Comment;
