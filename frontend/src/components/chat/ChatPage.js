import React, { useEffect, useState } from "react";
import UserApi from '../../api/UserApi';

function ChatPage() {

    const [ listOfUsers, setListOfUsers ] = useState([])
    const [ message, setMessage ] = useState("");

    useEffect(() => {
        function getAllUsers() {
            UserApi.getAllUsers()
                .then((res) => {
                    setListOfUsers(res.data)
                })
        }

        getAllUsers();
    }, [])


    const sendMessage = (e) => {
        if (message === "") {return;}

        const recipient = document.getElementById("recipient-form").value;

        console.log('sending', message, 'to', recipient)
        setMessage("");
    }

    return (
        <div>
            <h2>Send a direct message</h2>
            <div className="card">
                <p className="card-title">What do you want to tell?</p>
                <div className="form-group">
                    <textarea className="form-control"
                        placeholder="Say Hi!"
                        value={message}
                        onChange={event => setMessage(event.target.value)}/>
                </div>

                <div className="form-group">
                    <select id="recipient-form">
                        <option value={null}>Recipient</option>
                            { listOfUsers.length === 0 ? "" :
                            listOfUsers
                                .map((user) => 
                                    <option key={user.id} value={user.name}>
                                        {user.name}
                                    </option>
                                ) 
                            }
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                </div>
            </div>

            <div>
                <h3>Your messages</h3>
                <p> Need a route between user and personnal messages</p>
            </div>
        </div>
    );
}

export default ChatPage;