// import React from "react";
// import { Link } from "react-router-dom";

// function Post({ post, email }) {
//   const id = post.id;

//   return (
//     <div className="card ">
//       <div className="card-body">
//         <p>
//           Written by:<u>{post.user.email}</u>
//         </p>
//         <p>{post.body}</p>
//       </div>
//     </div>
//   );
// }

// export default Post;

import React, { useState } from 'react'
// inmport Comment from '../comment/Comment'


// A single post, here you can create your post as you want it to be
function Post(props) {

    // Comments will come from backend : 'GetAllCommentByPostId'
    const [ comments, setComments] = useState([]) 


    return (
        <div className="card mt-2">
          <div className="card-body">
                <p>
                Post : {props.post.text}
                </p>
            
            {/*
                Same way as Post we can bring a list of comments for each post
                comments.map((comment) =>
                    <Comment />
                )
            */}
             <button className="btn btn-danger" onClick="">Delete</button> 
             {/* <Link to={'/posts/' + id}> */}
                <button className="btn btn-primary">View</button>
                {/* </Link> */}
             </div>
        </div>
    );
}

export default Post;

