import React,  from 'react'
import PostForm from "./PostForm";

import PostsApi from "./../../api/PostsApi";

function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [email, setEmail] = useState("");



    return (
        <div>
            <PostForm onSubmit={(posts)=>create(posts,email)}/>
        </div>
    );
}

export default PostsPage;