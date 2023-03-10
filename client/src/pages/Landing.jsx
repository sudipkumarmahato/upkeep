import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials.jsx';
import Features from '../components/Features.jsx';
import FeaturesBlocks from '../components/FeaturesBlocks.jsx';

const Landing = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Landing;
