import React from 'react'


function Comment() {

    // const {comment, deleteComment} = props;

    return (
        <div className="comment">
            <div className="comment-content">
                {/* <Button 
                    content="x" type="del" 
                    onClick={() => deleteComment(comment.id)} 
                />  */}
                <p>
                    { comment.body }
                </p>
                <p className="author">
                    {comment.authorName}
                </p>
            </div>
        </div>
    );
}

export default Comment;