import React from "react";
import CommentApi from "../../api/CommentApi";

function CommentForm(props) {
    const [body, setBody] = React.useState("");

    function createComment() {
        if (body === "") { return;}
        // Invoke the passed in event callback
        
        const newComment = { 
            commentBody: body,
            user: props.user,
            post: props.post
        };
        console.log(newComment);
        CommentApi.createComment(newComment)
            .then(() => {
                props.getAllComments();
                setBody("");
            })
    }

    return (
        <div className="card">
        <div className="card-body">
            <h4 className="card-title" >Write your comment </h4>
            <div>
                <div className="form-group">
                    <textarea 
                        className="form-control"
                        value={body}
                        onChange={e => setBody(e.target.value)} />
                </div>

                <div className="form-group">
                    <button 
                        className="btn btn-primary" 
                        onClick={createComment}>
                        Comment
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CommentForm;
