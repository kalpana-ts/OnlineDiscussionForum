import React from "react";

function Comment({comment, deleteComment, user}) {

    return (
      <div className="card mt-3 ">
        <div className="card-title bg-secondary text-white m-0 p-1 ">
          {comment.user.name + " ... "}
        </div>
        <div className="card-body">
          {comment.commentBody} <br />
        </div>
        <div className="text-right">
          {user.email === comment.user.email ? (
            <button
              className="btn btn-sm btn-light mr-sm-2"
              onClick={() => deleteComment(comment.id)}
            >
              <i class="fas fa-trash"></i>
              {/* Delete */}
            </button>
          ) : null}
        </div>
      </div>
    );
}

export default Comment;
