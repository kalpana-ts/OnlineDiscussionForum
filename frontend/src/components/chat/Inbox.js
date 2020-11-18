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
    }, [])

    const deleteMessage = () => {
        console.log('delete');
    }

    return (
        <div>
            
            <div>
                <h3>Your messages received, {user.name}</h3>
                { messages.length === 0 ? "No body talks with you" :
                    messages.map((msg) => 
                        <Message key={msg.id} message={msg} deleteMessage={deleteMessage}/>
                    )
                }
            </div>

        </div>
    );
}

export default Inbox;