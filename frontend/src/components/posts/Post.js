import React ,{useState} from "react";


// A single post, here you can create your post as you want it to be
function Post(props) {

    // Comments will come from backend : 'GetAllCommentByPostId'
    const [ comments, setComments] = useState([]);

    return (
        <div>
            <div>
                Post : {props.post.postBody}
            </div>
            <div className="card mt-2">
                <div className="card-body">
                    <p>
                    Post : {props.post.postBody}
                    </p>
                
                {/*
                    Same way as Post we can bring a list of comments for each post
                    comments.map((comment) =>
                        <Comment />
                    )
                */}
                <button className="btn btn-danger mr-sm-2" onClick="">Delete</button> 
                
                {/* <Link to={'/posts/' + id}> */}
                    <button className="btn btn-primary"> View</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Post;

