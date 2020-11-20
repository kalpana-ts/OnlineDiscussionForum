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
        <div className="container col-sm-12 col-md-10 col-lg-8">
            
            <div>
                <h3 className="font-italic">Your messages sent, {user.name}</h3>
                { messages.length === 0 ? "You talk with nobody" :
                    messages.map((msg) => 
                        <Message key={msg.id} message={msg} 
                            deleteMessage={deleteMessage} 
                            getAllAgain={getAllMessages}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default SentMessages;