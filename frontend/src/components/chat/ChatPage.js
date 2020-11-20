import React, { useState } from "react";
import "./ChatPage.css";

// Components
import Inbox from './Inbox';
import SentMessages from './SentMessages';
import NewMessageForm from "./NewMessageForm";

function ChatPage({ user }) {

    const [newMessageComponentOn, setNewMessageComponentOn] = useState(false);
    const [inboxComponentOn, setInboxComponentOn] = useState(true);
    const [sentMessagesComponentOn, setSentMessagesComponentOn] = useState(false);

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
        <div className="ChatPage">
            <div class="container d-flex justify-content-around mb-4 btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked onClick={handleClickCompose} /> Compose
                </label>
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option2" autocomplete="off" onClick={handleClickInbox} /> Inbox
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off" onClick={handleClickSent} /> Sent
                </label>
            </div>
            {/* <div className="container d-flex justify-content-around mb-4">
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
            </div> */}

            <div>
                {newMessageComponentOn && <NewMessageForm user={user} />}
                {inboxComponentOn && <Inbox user={user} />}
                {sentMessagesComponentOn && <SentMessages user={user} />}
            </div>

        </div>
    );
}

export default ChatPage;