import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';
import PostForm from "./PostForm";
import Post from './Post';

function PostsPage() {
    
    const [ posts, setPosts ] = useState([]) 

    function getAllPosts() {
        PostsApi.getAllPosts()
            .then((data) => {
                setPosts(data.data);
            })
            .catch((error) => console.log(error))
    }

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
        <div className="PostPage">
                <PostForm posts={posts} getAllPosts={getAllPosts}/>

                { posts.map((post) => 
                        <Post key={post.id} post={post}/>
                    )
}
            </div>
    );
}
export default PostsPage;