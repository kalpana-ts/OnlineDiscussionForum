import React, { useState } from "react";
import PostsApi from '../../api/PostsApi'

import PostForm from "./PostForm";

function PostsPage() {

    const [ posts, setPosts ] = useState([])

    function getAllPosts() {
        PostsApi.getAllPosts()
            .then((data) => {
                setPosts(data);
            })
    }

    function createPost() {
        const newPost = {}; // Need to create this object with 'craeting form' values
        PostsApi.createPost(newPost)
            .then(() => {
                getAllPosts(); // to refresh the list immediately
            })
    }

    function deletePost(postId) {
        PostsApi.deletePost(postId)
            .then(() => {
                getAllPosts(); // to refresh the list immediately
            })
    }

    // Not a priority - What User Interface for updating post ?
    function updatePost() {
        const updatedPost = {}; // Need to create this object with 'updating form' values
        PostsApi.updatePost(updatedPost)
            .then(() => {
                getAllPosts(); // to refresh the list immediately
            })
    }

    const [posts, setPosts] = useState([]);
    const [email, setEmail] = useState("");


    return (
        <div>
            <PostForm onSubmit={(posts)=>create(posts,email)}/>
        </div>
    );
}

export default PostsPage;