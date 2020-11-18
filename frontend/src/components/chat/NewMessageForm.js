import React, {useState, useEffect} from "react";
import UserApi from '../../api/UserApi';
import MessageApi from '../../api/MessageApi';


function NewMessageForm({user}) {

    const [ listOfUsers, setListOfUsers ] = useState([])
    const [ message, setMessage ] = useState("");
    const [ recipient, setRecipient ] = useState("");
    const [ subject, setSubject ] = useState("");

    useEffect(() => {
        function getAllUsers() {
            UserApi.getAllUsers()
                .then((res) => {
                    setListOfUsers(res.data)
                })
        }

        getAllUsers();
    }, [])

    const sendMessage = () => {
        if (message === "") {return;}
        const newMessage = {
            msgSubject: subject,
            recipient: listOfUsers.find((user) => user.name = recipient),
            msgBody: message,
            sender: user
        }

        MessageApi.createMessage(newMessage)
            .then(() => {
                console.log('sent')
                setMessage("");
                setRecipient("")
            })
    }

    return (
        <div className="container">
            <h2>Send a direct message</h2>

            <div className="card p-3">
                <p className="card-title">What do you want to tell?</p>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Subject</span>
                    </div>
                    <input 
                        type="text" className="form-control"
                        value={subject}
                        onChange={event => setSubject(event.target.value)}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
                                To who ? 
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                { listOfUsers.length === 0 ? "" :
                                    listOfUsers
                                        .map((user) => 
                                            <button key={user.id}
                                                className="dropdown-item" type="button"
                                                onClick={() => {setRecipient(user.name)}}
                                            >   {user.name}
                                            </button>
                                        ) 
                                    }
                            </div>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder={recipient} disabled/>
                </div>
              
             

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Message</span>
                    </div>
                    <textarea 
                        className="form-control" 
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    ></textarea>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default NewMessageForm;