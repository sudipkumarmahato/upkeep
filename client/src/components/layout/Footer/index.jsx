import React from 'react';
import './index.scss';
import Subscribe from '../Subscribe/index.jsx';

const Footer = () => {
    return (
        <footer>
            <Subscribe />
            <hr style={{ marginBottom: 50, opacity: 0.4 }} />
            <div className="top">
                <ul>
                    <li>Features</li>
                    <li>Privacy Policy</li>
                    <li>Near Me</li>
                    <li>Terms & Condition</li>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Security Policy</li>
                </ul>
            </div>
            <div className="bottom">
                <div className="logo">UpKeep</div>
                <p>&copy; 2015 - 23 UpKeep All right reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;