import React, {useState, useEffect} from "react";
import MessageApi from '../../api/MessageApi';

// Components
import Message from './Message'


function SentMessages({user}) {

    const [ messages, setMessages ] = useState([]);

    function getAllMessages() {
        MessageApi.getAllMessagesBySenderId(user.id)
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
                <h3>Your messages sent, {user.name}</h3>
                { messages.length === 0 ? "You talk with nobody" :
                    messages.map((msg) => 
                        <Message key={msg.id} message={msg} deleteMessage={deleteMessage}/>
                    )
                }
            </div>
        </div>
    );
}

export default SentMessages;