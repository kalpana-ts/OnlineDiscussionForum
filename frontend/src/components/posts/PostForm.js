import React, { useState } from "react";
import PostsApi from '../../api/PostsApi';


// Form to create a new Post
function PostForm(props){

    // Can add using the same way a title or anything else if we want
    const [text, setText] = useState("");

    function createPost() {
        if (text === "") { return;} // We don't want to send an empty post
        const newPost = {
            postTitle: "title", // Random id for now
            postBody: text
        }; 
        
        PostsApi.createPost(newPost)
            .then(() => {
                props.getAllPosts(); // to refresh the list immediately
                setText("");  // Clear the Form
            })
    }
        
        
        // Waiting for routes - No need that at the end
        

        // Uncomment when routes are ready.
        // PostsApi.createPost(newPost)
        //     .then(() => {
        //         getAllPosts(); // to refresh the list immediately
        //         setText("");  // Clear the Form
        //     })
    

    return (
        <div className="card">
            <p className="card-title">What's on your mind?</p>
            <div className="form-group">
            <textarea className="form-control"
                    value={text}
                    onChange={event => setText(event.target.value)}/>
            </div>
            <div className="form-group">
            <button className="btn btn-primary" onClick={createPost}>Post</button>
            </div>
        </div>
    );
}

export default PostForm;