import React,{ useEffect, useState } from "react";


function PostForm({onSubmit}){
    const [text, setText] = useState("");

    const submitPost = () => {
        onSubmit({text: text});

    };

    return (
        <div className="card">
            <p className="card-title">What's on your mind?</p>
            <div className="form-group">
            <textarea className="form-control"
                      value={text}
                      onChange={event => setText(event.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={submitPost}>Post</button>
        </div>
    );
}

export default PostForm;