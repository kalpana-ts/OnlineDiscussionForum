import React, { useState } from "react";

// Components
import Inbox from './Inbox';
import SentMessages from './SentMessages';
import NewMessageForm from "./NewMessageForm";

function ChatPage({user}) {

    const [ newMessageComponentOn, setNewMessageComponentOn ] = useState(true);
    const [ inboxComponentOn, setInboxComponentOn ] = useState(false);
    const [ sentMessagesComponentOn, setSentMessagesComponentOn ] = useState(false);

    const handleClickCompose = () => {
        setNewMessageComponentOn(!newMessageComponentOn)
        setInboxComponentOn(false)
        setSentMessagesComponentOn(false)
    }
    const handleClickInbox = () => {
        setNewMessageComponentOn(false)
        setInboxComponentOn(!inboxComponentOn)
        setSentMessagesComponentOn(false)
    }
    const handleClickSent = () => {
        setNewMessageComponentOn(false)
        setInboxComponentOn(false)
        setSentMessagesComponentOn(!sentMessagesComponentOn)
    }

    return (
        <div>
            <div className="container d-flex justify-content-around mb-4">
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={handleClickCompose}
                >Compose</button>
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={handleClickInbox}
                >Inbox</button>
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={handleClickSent}
                >Sent</button>
            </div>

            <div>
                { newMessageComponentOn && <NewMessageForm  user={user} /> }
                { inboxComponentOn && <Inbox user={user} /> }
                { sentMessagesComponentOn && <SentMessages user={user} /> }
            </div>

        </div>
    );
}

export default ChatPage;