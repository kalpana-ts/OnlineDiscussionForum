import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";
import UserApi from './api/UserApi';

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";
import ChatPage from './components/chat/ChatPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  const [user, setUser] = useState({});

  const userMail = Auth.getUserMail();
  useEffect(() => {
    function getUserByMail() {
        UserApi.getUserByMail(userMail)
            .then((res) => {
                setUser(res.data)
            })
    }
    getUserByMail();
}, [userMail])
  
  const loggedInRouter = (
            <Router>
                <Navbar onLogout={() => Auth.logout()} />

                <div className="container mt-5">
                    <Switch>
                        <Route path="/posts">
                            <PostsPage user={user}/>
                        </Route>

                        <Route path="/chat">
                            <ChatPage user={user}/>
                        </Route>

                        <Route path="/">
                          <HomePage user={user}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
