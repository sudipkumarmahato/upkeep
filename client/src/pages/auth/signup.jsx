import React, { useState } from 'react';
import './index.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoReloadCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [hidden, setHidden] = useState(true);
    const [password, setPassword] = useState('');
    const [remaining, setRemaining] = useState(20);

    const remainingChange = (e) => {
        setPassword(e.target.value);
        setRemaining(20 - e.target.value.length);
    };

    return (
        <div id="signup">
            <div className="top">
                <h1>Welcome !</h1>
                <p>Let&apos;s create your account</p>
            </div>

            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Username</label>
                    <input
                        type="name"
                        id="name"
                        placeholder="neeswebservices"
                        className="form-label"
                    />
                </div>
            </div>
            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="neeswebservices@example.com"
                        className="form-label"
                    />
                </div>
            </div>
            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Address</label>
                    <input
                        type="address"
                        id="address"
                        placeholder="Tinkune, Koteshwor"
                        className="form-label"
                    />
                </div>
            </div>
            <div className="input">
                <div className="input-container password">
                    <label htmlFor="name">Password</label>
                    <input
                        type={hidden ? 'password' : 'text'}
                        disabled={remaining <= 0 && 'true'}
                        onChange={(e) => remainingChange(e)}
                        placeholder={hidden && 'neeswebservices'}
                        value={password}
                        id="name"
                        className="form-label"
                    />
                    <div className="right-password">
                        {remaining ? (
                            <span
                                style={{
                                    opacity: `calc(100% - ${
                                        (remaining / 20) * 100
                                    }%)`,
                                }}
                                title="Remaining character"
                            >
                                {remaining < 10 ? `0${remaining}` : remaining}
                            </span>
                        ) : (
                            <>
                                <IoReloadCircleOutline
                                    onClick={(e) => {
                                        setPassword('');
                                        setRemaining(20);
                                    }}
                                    className="icon"
                                />
                            </>
                        )}

                        <button
                            className="show"
                            onClick={() => setHidden(!hidden)}
                        >
                            {!hidden ? (
                                <AiOutlineEye className="icon" />
                            ) : (
                                <AiOutlineEyeInvisible className="icon" />
                            )}
                        </button>
                    </div>
                </div>
                {remaining < 1 && (
                    <span className="pass-hint">
                        Are you sure about your password?
                    </span>
                )}
            </div>

            <div className="input button">
                <button type="submit" className="auth-main-button" id="submit">
                    Signup
                </button>
            </div>
            <div className="input links">
                <div className="custom">
                    <span>
                        Already a user?
                        <Link to={'/auth/login'} className="link">
                            {'  '}Login Here
                        </Link>
                    </span>
                </div>
                <div className="agree">
                    <label htmlFor="agree">
                        I accept Terms of service and Privacy policy.
                    </label>
                    <input type="checkbox" id="agree" />
                </div>
            </div>
        </div>
    );
};

export default Signup;
