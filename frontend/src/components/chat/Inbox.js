import React, {useState, useEffect}  from "react";
import MessageApi from '../../api/MessageApi';


// Components
import Message from './Message'

function Inbox({user}) {

    const [ messages, setMessages ] = useState([]);

    function getAllMessages(userId) {
        MessageApi.getAllMessagesByRecipientId(userId)
            .then((res) => {
                setMessages(res.data);
            })
    }

    useEffect(() => {
        getAllMessages(user.id);
        const chatTimer = setInterval(() => {
            console.log("get all messages")
            getAllMessages(user.id);
        }, 2000);

        return () => {
            clearInterval(chatTimer)
        }
    
    }, [])

    const deleteMessage = (messageId) => {
        MessageApi.deleteMessage(messageId)
        .then(() => {
            getAllMessages(user.id);
        })
    }

    return (
        <div className="container col-sm-12 col-md-10 col-lg-8">
            
            <div>
                <h3 className="font-italic">Your messages received, {user.name}</h3>
                { messages.length === 0 ? "No body talks with you" :
                    messages.map((msg) => 
                        <Message key={msg.id} message={msg} 
                            deleteMessage={deleteMessage} inbox={true}
                            getAllAgain={getAllMessages} user={user}
                        />
                    )
                }
            </div>

        </div>
    );
}

export default Inbox;