import React from "react";


function Message({message}) {

    return (
        <div className="card mt-3">
            <div className="card-title bg-secondary text-white m-0 p-1">
                {message.sender.name + ' >>> ' + message.recipient.name + ' => '
                + message.msgSubject} 
            </div>
            <div className="card-body">
                    {message.msgBody} <br/>
            </div>
            <div className="text-right">
                <button className="btn btn-danger btn-sm" >Delete</button>
            </div>
        </div>
    );
}

export default Message;