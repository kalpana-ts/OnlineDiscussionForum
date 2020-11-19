import React, { useState } from "react";

import CommentsPage from "../comments/CommentsPage";
import "./Post.css";

// A single post, here you can create your post as you want it to be
function Post(props) {
  const [bodyIsOpen, setBodyIsOpen] = useState(false);
  const handleOpenMessage = () => {
    setBodyIsOpen(!bodyIsOpen);
  };

  return (
    <>
      <div className="card mt-4 postbody">
        <div className="card-title bg-secondary text-white m-0 p-1">
          <div
            className="mw-75"
            onClick={handleOpenMessage}
            style={{ cursor: "pointer" }}
          >
            {props.post.user.name + " : " + props.post.postTitle}
          </div>
        </div>
        {bodyIsOpen && <div><div className="card-body">{props.post.postBody}</div>
        <div className="text-right">
          {props.post.user.email != props.user.email ? (
            <div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => props.likePost(props.post)}
              >
                <i class="far fa-thumbs-up">{props.post.likes}</i>
              </button>

              <button
                type="button"
                className="btn btn-light"
                onClick={() => props.disLikePost(props.post)}
              >
                <i class="far fa-thumbs-down">{props.post.disLikes}</i>
              </button>
            </div>
          ) : null}
          {props.post.user.email === props.user.email ? (
            <button
              className="btn btn-danger mr-sm-2"
              onClick={() => props.deletePost(props.post.id)}
            >
              Delete
            </button>
          ) : null}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={`#commentsPage${props.post.id}`}
          >
            Comment
          </button>
        </div>
        </div>
}
      </div>

      <div
        className="modal fade"
        id={`commentsPage${props.post.id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title m-0 p-1 font-weight-bold">
                {props.post.user.name + " => " + props.post.postTitle}
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CommentsPage
                key={props.post.id}
                post={props.post}
                user={props.user}
              />
            </div>
            <div class="modal-footer bg-secondary">
              <button
                type="button"
                className="btn btn-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
