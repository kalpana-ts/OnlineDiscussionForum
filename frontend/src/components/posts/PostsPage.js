import React, { useState } from "react";
import PostsApi from '../../api/PostsApi'

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


    return (
        <div>
        </div>
    );
}

export default PostsPage;