import React from "react";

import './HomePage.css';

function HomePage() {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">What is community?</h4>
                <p>Communities may share a sense of place situated in a given geographical area or in virtual space through communication platforms.</p>
                <p>OR</p>
                <p>Community = a group of people that care about each other and feel they belong together.</p>
                <p>OR</p>
                <p>A community = a group of people that care about the same goal.</p>
                <p>We bring to you, your community.</p>
                
                {/* <ul>
                    <li><a href="https://spring.io/projects/spring-boot">Spring</a></li>
                    <li><a href="https://www.postgresql.org">PostgreSQL</a></li>
                    <li><a href="https://reactjs.org">React</a></li>
                    <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></li>
                    <li><a href="https://github.com/axios/axios">Axios</a></li>
                </ul> */}
            </div>
        </div>
    );
}

export default HomePage;