import React from 'react';
import HomeHero from '../components/HomeHero.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHero />
            <Footer />
        </>
    );
};

export default Home;
