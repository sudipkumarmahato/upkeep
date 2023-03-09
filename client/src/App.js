import React from 'react';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter.jsx';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;
