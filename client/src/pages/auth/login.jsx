import React, { useState } from 'react';
import './index.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    const [hidden, setHidden] = useState(true);

    return (
        <div id="signup">
            <div className="top">
                <h1>Login</h1>
            </div>

            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Username/email</label>
                    <input
                        type="name"
                        id="name"
                        placeholder="neeswebservices"
                        className="form-label"
                    />
                </div>
            </div>
            <div className="input">
                <div className="input-container password">
                    <label htmlFor="name">Password</label>
                    <input
                        type={hidden ? 'password' : 'text'}
                        placeholder={hidden && 'neeswebservices'}
                        id="name"
                        className="form-label"
                    />
                    <button className="show" onClick={() => setHidden(!hidden)}>
                        {!hidden ? (
                            <AiOutlineEye className="icon" />
                        ) : (
                            <AiOutlineEyeInvisible className="icon" />
                        )}
                    </button>
                </div>
            </div>
            <div className="input links">
                <div className="custom">
                    <Link to={'/auth/signup'} className="link">
                        Don&apos;t have a account?
                    </Link>
                </div>
                <div className="custom">
                    <Link to={'/auth/forgot'} className="link">
                        Forgot Password?
                    </Link>
                </div>
            </div>
            <div className="input button">
                <button type="submit" className="auth-main-button" id="submit">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
