import React, { useState } from "react";
import PostsApi from '../../api/PostsApi';

import PostForm from "./PostForm";
import Post from './Post';

function PostsPage() {

    // Make temporary posts
    const postsForTrying = [ {id: 1, text: "post 1"}, {id: 2, text: "post 2"}]

    const [ posts, setPosts ] = useState(postsForTrying) // Replace it by [] when ready

    // Need to do it once, inside a UesEffect
    function getAllPosts() {
        PostsApi.getAllPosts()
            .then((data) => {
                setPosts(data);
            })
    }

    // Will be linked to user in a second time
    function deletePost(postId) {
        PostsApi.deletePost(postId)
            .then(() => {
                getAllPosts(); // to refresh the list immediately
            })
    }

    return (
        <div>
            <PostForm posts={posts} setPosts={setPosts}/>
            <div>
                <h2>List of posts</h2>
                {
                    posts.map((post) => 
                        <Post key={post.id} post={post}/>
                    )
                }
            </div>
        </div>
    );
}

export default PostsPage;