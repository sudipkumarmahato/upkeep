import React from 'react';
import HomeHero from '../components/HomeHero.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import ServicePage from '../components/ServicePage.jsx';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHero />
            <ServicePage />
            <Footer />
        </>
    );
};

export default Home;
