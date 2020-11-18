import React, { useState } from "react";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import './Login.css';
import logo from '../../assets/logo.png';

function LoginPage() {

    const [registerFormOpen, setRegisterFormOpen] = useState(false)

    const login = async (loginData) => {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    const register = async (registrationData) => {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6" >
                        <div className="branding" >
                            <img className="brandLogo" src= {logo} alt="logo" />
                            <h1 className="brandName" >community</h1>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-12 strong-shadow">
                                <LoginForm onSubmit={login} />
                            </div>

                            { registerFormOpen ?
                                <div className="col-12 mt-4">
                                    <RegisterForm onSubmit={register} />
                                </div>
                                :
                                <div className="col-12 mt-4">
                                    Not yet a community member?
                                    <span
                                        className="btn mb-1"
                                        onClick={() => {setRegisterFormOpen(true)}}
                                    >Sign up</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;