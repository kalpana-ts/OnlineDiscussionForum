import React, { useEffect, useState } from "react";
import PostsApi from '../../api/PostsApi';

// Components
import PostForm from "./PostForm";
import Post from './Post';

function PostsPage({user}) {
    
    const [ posts, setPosts ] = useState([]) // Will contain all posts
    const [ newPostComponentOn, setNewPostComponentOn ] = useState(false);
    const [ allPostsOn, setAllPostsOn ] = useState(true);
    const [ onlyUserPostsOn, setOnlyUserPostsOn ] = useState(false);

    const handleClickCreate = () => {
        setNewPostComponentOn(!newPostComponentOn)
        setAllPostsOn(false)
        setOnlyUserPostsOn(false)
    }
    const handleClickAll = () => {
        setNewPostComponentOn(false)
        setAllPostsOn(!allPostsOn)
        setOnlyUserPostsOn(false)
    }
    const handleClickMyPosts = () => {
        setNewPostComponentOn(false)
        setAllPostsOn(false)
        setOnlyUserPostsOn(!onlyUserPostsOn)
    }

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
            <div className="container d-flex justify-content-around mb-4">
                <button 
                    className="btn  btn-primary"
                    onClick={handleClickCreate}
                >Create Post</button>
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={handleClickAll}
                >All Posts</button>
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={handleClickMyPosts}
                >My Posts</button>
            </div>

            { newPostComponentOn && <PostForm posts={posts} getAllPosts={getAllPosts} user={user}/> }

            { !newPostComponentOn && (allPostsOn || onlyUserPostsOn) &&
            <div>
                { posts.length === 0 ? "No posts yet" :
                    posts
                        .filter((post) => allPostsOn ? true : post.user.id === user.id )
                        .map((post) => 
                        <Post key={post.id} post={post} user={user} deletePost={deletePost}/>
                    )
                }
            </div>
            }
        </div>
    );
}
export default PostsPage;
