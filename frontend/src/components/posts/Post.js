import React from "react";
import { Link } from "react-router-dom";

function Post({ post, email }) {
  const id = post.id;

  return (
    <div className="card ">
      <div className="card-body">
        <p>
          Written by:<u>{post.user.email}</u>
        </p>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
