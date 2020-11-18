import React, {useState} from "react";
import CommentsPage from "../comments/CommentsPage";


// A single post, here you can create your post as you want it to be
function Post(props) {

    return (
        <div>
            <div>
                Post : {props.post.postBody}
            </div>
            <div className="card mt-2">
                <div className="card-body">
                    <p>
                        Title : {props.post.postTitle} <br/>
                        Post : {props.post.postBody} <br/>
                        WrittenBy : {props.post.user.name}
                    </p>

                    {(props.post.user.name === props.user.name)?
                        <button
                            className="btn btn-danger mr-sm-2"
                            onClick={() => props.deletePost(props.post.id)}
                        >Delete</button> 
                        : null 
                    }

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#commentsPage">
                       Comment
                    </button>

                   
                    <div className="modal fade" id="commentsPage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <CommentsPage postId={props.post.id} user={props.user}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
