import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Help from './pages/Help.jsx';
import Error from './components/Error.jsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/help" element={<Help />} />
                <Route element={Error} />
            </Routes>
        </>
    );
};

export default App;
