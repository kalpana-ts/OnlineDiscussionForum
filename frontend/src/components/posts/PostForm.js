import React, { useState } from "react";
// import PostsApi from '../../api/PostsApi';


// Form to create a new Post
function PostForm(props){

    // Can add using the same way a title or anything else if we want
    const [text, setText] = useState("");

    function createPost() {
        if (text === "") { return;} // We don't want to send an empty post

        const newPost = {
            id: Math.floor(Math.random() * Math.floor(10000)), // Random id for now
            text: text
        }; 

        // Waiting for routes - No need that at the end
        console.log('we are going to post : ', newPost);
        props.setPosts(props.posts.concat(newPost));
        setText("");

        // Uncomment when routes are ready.
        // PostsApi.createPost(newPost)
        //     .then(() => {
        //         getAllPosts(); // to refresh the list immediately
        //         setText("");  // Clear the Form
        //     })
    }

    return (
        <div className="card">
            <p className="card-title">What's on your mind?</p>
            <div className="form-group">
            <textarea className="form-control"
                      value={text}
                      onChange={event => setText(event.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={createPost}>Post</button>
        </div>
    );
}

export default PostForm;