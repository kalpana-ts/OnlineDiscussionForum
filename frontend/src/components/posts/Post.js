import React, { useState } from 'react'
// inmport Comment from '../comment/Comment'


// A single post, here you can create your post as you want it to be
function Post(props) {

    // Comments will come from backend : 'GetAllCommentByPostId'
    const [ comments, setComments] = useState([]);

    return (
        <div>
            Post : {props.post.postBody}
            {/*
                Same way as Post we can bring a list of comments for each post
                comments.map((comment) =>
                    <Comment />
                )
            */}
        </div>
    );
}

export default Post;