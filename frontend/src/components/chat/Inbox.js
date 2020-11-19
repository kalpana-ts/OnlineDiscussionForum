import React, {useState, useEffect}  from "react";
import MessageApi from '../../api/MessageApi';


// Components
import Message from './Message'

function Inbox({user}) {

    const [ messages, setMessages ] = useState([]);

    function getAllMessages() {
        MessageApi.getAllMessagesByRecipientId(user.id)
            .then((res) => {
                setMessages(res.data);
            })
    }

    useEffect(() => {
        getAllMessages();
        const chatTimer = setInterval(() => {
            console.log("get all messages")
            getAllMessages();
        }, 5000);

        return () => {
            clearInterval(chatTimer)
        }
    
    }, [])

    const deleteMessage = () => {
        console.log('delete');
    }

    return (
        <div className="container col-sm-12 col-md-10 col-lg-8">
            
            <div>
                <h3 className="font-italic">Your messages received, {user.name}</h3>
                { messages.length === 0 ? "No body talks with you" :
                    messages.map((msg) => 
                        <Message key={msg.id} message={msg} 
                            deleteMessage={deleteMessage} inbox={true}
                            getAllAgain={getAllMessages}
                        />
                    )
                }
            </div>

        </div>
    );
}

export default Inbox;