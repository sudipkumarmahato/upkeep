import './navbar.scss';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="left">
                <div className="logo">
                    <p>UpKeep</p>
                </div>
                <button>Become a Vendor?</button>
            </div>

            <div className="right">
                <ul>
                    <li>Service</li>
                    <li>Help</li>
                    <li>Blog</li>

                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;