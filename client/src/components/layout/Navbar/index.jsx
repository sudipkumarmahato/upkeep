import './navbar.scss';
import React from 'react';
// import { Link } from 'react-router-dom';
import { Images } from '../../../../public/assets';

const Navbar = () => {
    return (
        <nav>
            <div className="left">
                <div className="logo">
                    <img
                        style={{ width: '20%' }}
                        src={Images.logoLight}
                        alt="Upkeep"
                    />
                </div>
                {/* <button>Become a Vendor?</button> */}
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
