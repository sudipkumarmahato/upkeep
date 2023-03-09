import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Help from './pages/Help.jsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </>
    );
};

export default App;
