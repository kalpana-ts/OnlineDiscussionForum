import React, { useState } from "react";
import { Link } from "react-router-dom";

import CommentForm from "../comments/CommentForm";
import CommentsPage from "../comments/CommentsPage";

// A single post, here you can create your post as you want it to be
function Post(props) {
  // const [ comments, setComments] = useState(props.post.comments); // All comment for this post
  // console.log(comments);

  return (
    <div className="card mt-2">
      <div className="card-body">
        <p>
          Title : {props.post.postTitle} <br />
          Post : {props.post.postBody} <br />
          WrittenBy : {props.post.user.name}
        </p>
        {props.post.user.name === props.user.name ? (
          <button
            className="btn btn-danger mr-sm-2"
            onClick={() => props.deletePost(props.post.id)}
          >
            Delete
          </button>
        ) : null}

        {/* <Link to={'/posts/' + props.post.id}>
                        <button className="btn btn-primary" >Comments</button>
                </Link> */}

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#commentsPage${props.post.id}`}
        >
          Comment
        </button>

        <div
          className="modal fade"
          id={`commentsPage${props.post.id}`}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Title : {props.post.postTitle} <br />
                  Post : {props.post.postBody} <br />
                  WrittenBy : {props.post.user.name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <CommentsPage key={props.post.id} post={props.post} user={props.user} />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
