import React, { useState } from "react";
import { FaEnvelope } from 'react-icons/fa';
import MessageApi from '../../api/MessageApi';


function Message({message, inbox, getAllAgain, deleteMessage, user}) {

    const [ bodyIsOpen, setBodyIsOpen ] = useState(false)

    const handleOpenMessage = () => { 
        setBodyIsOpen(!bodyIsOpen);

        if (inbox) {
            if (!message.readByRecipient) {

                const newMessage = {...message}
                newMessage.readByRecipient = true;

                MessageApi.updateMessage(newMessage)
                .then(() => {
                    getAllAgain(message.recipient.id);
                })
            }
        } else {
            if (!message.readBySender) {

                const newMessage = {...message}
                newMessage.readBySender = true;

                MessageApi.updateMessage(newMessage)
                .then(() => {
                    getAllAgain(message.sender.id);
                })
            }           
        }
    }

    return (
        <div className="d-flex align-items-center justi">
            <div className={`p-2 rounded-circle mr-3 mt-2 text-white 
                    ${inbox 
                        ? (message.readByRecipient ? "bg-success" : "bg-danger") 
                        : message.readBySender ? "bg-success" : "bg-danger"}`
                    }>
                <FaEnvelope />
            </div>
            <div className="card mt-3 w-100">
                <div className="card-title bg-secondary text-white m-0 p-1 d-flex justify-content-between">
                    <div 
                        className="mw-75" 
                        onClick={handleOpenMessage}
                        style={{cursor: 'pointer'}}
                    >
                        { inbox ? message.sender.name + ' : ' :
                        ' Sent to : ' + message.recipient.name + ' | ' } {message.msgSubject} 
                    </div>
                    <button 
                        className="btn btn-danger btn-sm align-self-start"
                        onClick={() => deleteMessage(message.id)} 
                    >
                        <i class="fas fa-trash"></i>
                    </button>
                    {/* { ((inbox && message.recipient.email === user.email) || 
                    (!inbox && message.sender.email === user.email)) ?
                    <button 
                        className="btn btn-danger btn-sm align-self-start"
                        onClick={() => deleteMessage(message.id)} 
                    >Delete</button>
                    : null} */}
                </div>
                {
                    bodyIsOpen && 
                    <div className="card-body">
                            {message.msgBody} <br/>
                    </div>
                }
            </div>
        </div>
    );
}

export default Message;