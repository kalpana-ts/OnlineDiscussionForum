import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';

// Components
import PostForm from "./PostForm";
import Post from './Post';

function PostsPage({user}) {
    
    const [ posts, setPosts ] = useState([]) // Will contain all posts

    function getAllPosts() {
        PostsApi.getAllPosts()
            .then((data) => {
                setPosts(data.data);
            })
    }

    // Load all Posts once, when opening Page
    useEffect(() => {
        getAllPosts();
    }, [])

    // Delete post is at this level because if we delete the post directly inside itself, it will generate issues
    function deletePost(postId) {
        PostsApi.deletePost(postId)
            .then(() => {
                getAllPosts(); // to refresh the list immediately
            })
    }

    return (
        <div className="PostPage">
            <PostForm posts={posts} getAllPosts={getAllPosts} user={user}/>
            <div>
                { posts.length === 0 ? "No posts yet" :
                    posts.map((post) => 
                        <Post key={post.id} post={post} user={user} deletePost={deletePost}/>
                    )
                }
            </div>
        </div>
    );
}
export default PostsPage;
