import React, { useState } from "react";
import PostsApi from '../../api/PostsApi';


// Form to create a new Post
function PostForm(props){

    // Can add using the same way a title or anything else if we want
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    function createPost() {
        if (body === "") { return;} // We don't want to send an empty post

        const newPost = {
            postTitle: title, 
            postBody: body,
            likes: 0,
            disLikes: 0,
            user: props.user
        }; 
        
        PostsApi.createPost(newPost)
            .then(() => {
                props.getAllPosts(); // to refresh the list immediately
                setBody("");  // Clear the Form
                setTitle("");
            })
    }    

    return (
        <div className="container col-sm-12 col-md-10 col-lg-8">
            <p className="card-title">Create a new Post</p>
            <div className="form-group">
                <input className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <textarea className="form-control"
                    placeholder={`What's on your mind, ${props.user.name}?`}
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary  " onClick={createPost}>Post</button>
            </div>
        </div>
    );
}

export default PostForm;