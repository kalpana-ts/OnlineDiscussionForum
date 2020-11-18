import React from "react";

function Comment({comment, deleteComment, user}) {

    console.log(comment);

    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>
                    Comment : {comment.commentBody} <br/>
                    WrittenBy : {user.name}
                </p>
              
                <button className="btn btn-danger" >Delete</button>
            </div>
        </div>
    );
}

export default Comment;
