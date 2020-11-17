import React ,{useState} from "react";


// A single post, here you can create your post as you want it to be
function Post(props) {

    const [ comments, setComments] = useState(props.post.comments); // All comment for this post

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
                    <button className="btn btn-primary"> View</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Post;
