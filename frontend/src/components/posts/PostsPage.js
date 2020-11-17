import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';

import PostForm from "./PostForm";
import Post from './Post';

function PostsPage({user}) {

    const [ posts, setPosts ] = useState([]); 

    function getAllPosts() {
        PostsApi.getAllPosts()
            .then((res) => {
                setPosts(res.data);
            })
    }

    // Load all Posts once, when opening Post Page
    useEffect(() => {
        getAllPosts();
    }, [])

    // Will be linked to user in a second time
    function deletePost(postId) {
        PostsApi.deletePost(postId)
            .then(() => {
                getAllPosts(); // to refresh the list immediately
            })
    }

    return (
        <div>
            <PostForm posts={posts} getAllPosts={getAllPosts} user={user}/>
            <div>
                <h2>List of posts</h2>
                { posts.length === 0 ? "No posts yet" :
                    posts.map((post) => 
                        <Post key={post.id} post={post} deletePost={deletePost}/>
                    )
                }
            </div>
        </div>
    );
}

export default PostsPage;