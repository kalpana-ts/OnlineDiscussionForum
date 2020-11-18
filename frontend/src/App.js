import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import Auth from './services/Auth';
import UserApi from './api/UserApi';

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";
import ChatPage from './components/chat/ChatPage';
import Navbar from "./components/layout/Navbar";

function App() {
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    Auth.bindLoggedInStateSetter(setLoggedIn);

    const [user, setUser] = useState({});
    const userMail = Auth.getUserMail();

    // Store user informations when logged: can acces user mail, name, Id
    useEffect(() => {
        function getUserByMail() {
            UserApi.getUserByMail(userMail)
                .then((res) => {
                    setUser(res.data)
                })
        }

        userMail !== null && getUserByMail();
    }, [userMail])

    const loggedInRouter = (
        <Router>
            <Navbar onLogout={() => Auth.logout()} />

            <div className="container mt-5">
                <Switch>
                    <Route path="/posts">
                        <PostsPage user={user} />
                    </Route>
                    
                    <Route path="/chat">
                        <ChatPage user={user} />
                    </Route>

                    <Route path="/">
                        <HomePage user={user} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

    return (loggedIn ? loggedInRouter : <LoginPage />);
}

export default App;
