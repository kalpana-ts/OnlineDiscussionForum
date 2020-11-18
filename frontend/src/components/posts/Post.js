import React ,{useState} from "react";
import CommentForm from "../comments/CommentForm";
import CommentsPage from "../comments/CommentsPage";


// A single post, here you can create your post as you want it to be
function Post(props) {

    // const [ comments, setComments] = useState(props.post.comments); // All comment for this post
    // console.log(comments);
    
    

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

                    {/*
                    comments.map((comment) =>
                        <Comment />
                    )
                */}
                    {(props.post.user.name === props.user.name)?
                    <button
                        className="btn btn-danger mr-sm-2"
                        onClick={() => props.deletePost(props.post.id)}
                    >Delete</button> : null }

                    {/* <Link to={'/posts/' + id}>  Do you mean a link to see the entire post ?
                Maybe we don't need to make a new API call, but we can definitely open it into a new window
                Look at bootstrap 'Modal', it is pretty cool and you don't need a new page */}
                    
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#commentsPage">
                       Comment
                    </button>

                   
                    <div class="modal fade" id="commentsPage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <CommentsPage post={props.post} user={props.user}/>
                                    {/* { <div>
                                    {{ comments.length === 0 ? "No comments yet" : }
                  {  comments.map((comment) => 
                        <Comment key={comment.id} comment={comment}  />)}
                    
                                    </div>  */}


                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Post;
