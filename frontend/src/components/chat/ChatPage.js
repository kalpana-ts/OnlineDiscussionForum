import React, { useState } from "react";

// Components
import Inbox from './Inbox';
import SentMessages from './SentMessages';
import NewMessageForm from "./NewMessageForm";

function ChatPage({user}) {

    const [ newMessageComponentOn, setNewMessageComponentOn ] = useState(false);
    const [ inboxComponentOn, setInboxComponentOn ] = useState(true);
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
                <div className="btn-group" role="group">
                    <button 
                        className="btn btn-info"
                        onClick={handleClickCompose}
                    >Compose</button>
                    <button 
                        className="btn btn-info"
                        onClick={handleClickInbox}
                    >Inbox</button>
                    <button 
                        className="btn btn-info"
                        onClick={handleClickSent}
                    >Sent</button>
                </div>
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