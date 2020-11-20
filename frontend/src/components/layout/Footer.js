import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

function Footer() {
    return(
        <footer className="contactUs">
            <ul class="contactUs-list">
                <li>By @team-wd-9</li>
                <li>
                    <a href="https://www.community.com/privacy/explanation/">Privacy</a></li>
                <li>
                    <a href="https://www.community.com/policies?ref=pf/">Terms</a></li>
                <li>
                    <a href="https://www.community.com/policies/cookies/">Cookies</a></li>
            </ul>
        </footer>
    );
}

export default Footer;