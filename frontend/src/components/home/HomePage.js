import React from "react";

import './HomePage.css';
import homeImage from '../../assets/home.png';

function HomePage() {
    return (
        <div className="card">
            <div className="card-body">
                <img className="homeImage" src= {homeImage} alt="home image of group of people" />
                <h4 className="card-title">What is community?</h4>
                <div className="home-body">
                    <p>Community is a group of people that care about each other and feel they belong together.</p>
                    <p>or</p>
                    <p>Communities may share a sense of place situated in a given geographical area or in virtual space through communication platforms.</p>
                    <p>or</p>
                    <p>A community is a group of people that care about the same goal.</p>
                    <p className= "tagLine">We bring to you, your community..</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;