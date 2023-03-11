import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import About from './pages/About.jsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/help" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route element={Error} />
            </Routes>
        </>
    );
};

export default App;
