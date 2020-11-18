import React from "react";
import CommentApi from "../../api/CommentApi";

function CommentForm(props) {

    const [body, setBody] = React.useState("");

    function createComment() {
        if (body === "") { return;}
        const newComment = { 
            commentBody: body,
            user: props.user,
            post: props.post
        };
        CommentApi.createComment(newComment)
            .then(() => {
                props.getAllComments();
                setBody("");
            })
    }

    return (
        <div className="card mt-3">
        <div className="card-title bg-primary text-white m-0 p-1">
            Write you comment Here
        </div>
        <div className="card-body">
            <textarea 
                className="form-control"
                value={body}
                onChange={e => setBody(e.target.value)} 
            />
        </div>
        <div className="text-right">
            <button 
                className="btn btn-sm btn-primary" 
                onClick={createComment}>
                Send
            </button>
        </div>
    </div>

    );
}

export default CommentForm;
