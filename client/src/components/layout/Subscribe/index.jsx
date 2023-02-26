import React, { useState } from 'react';
import './index.scss';

const Subscribe = () => {
    const [email, setEmail] = useState('example@mail.com');

    return (
        <div className="subscribe">
            <h3>Subscribe</h3>
            <input
                type="email"
                id="email"
                placeholder="example@mail.com"
                value={email}
                onFocus={(e) => setEmail('')}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <button>Submit</button>
        </div>
    );
};

export default Subscribe;