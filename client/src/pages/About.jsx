import React from 'react';
// import logoImage from '../assets/images/bgImage.jpg';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const About = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col lg:flex-row items-center justify-center bg-white  py-24 px-6">
                <div className="lg:w-1/2 lg:mr-10 flex justify-center">
                    <img
                        // src={logoImage}
                        alt="About Us"
                        className="w-full md:max-w-md rounded-md shadow-lg"
                    />
                </div>
                <div className="lg:w-1/2 max-w-lg text-center md:text-left">
                    <h2 className="text-4xl text-gray-800 font-bold mb-4">
                        About Us
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ut sollicitudin nulla, vel malesuada ipsum. Integer
                        dictum, enim eget aliquet molestie, lorem nisi molestie
                        odio, vel lobortis ipsum sapien ut sapien.
                    </p>
                    <p className="text-xl text-gray-700 mb-8">
                        Sed quis est sed lorem maximus semper vel at tellus.
                        Curabitur suscipit purus quis mi congue faucibus.
                        Integer vitae tellus non justo auctor pulvinar.
                    </p>
                    <p className="text-xl text-gray-700 mb-8">
                        Nulla facilisi. Fusce porttitor commodo velit, a
                        consectetur dolor facilisis ac. Suspendisse potenti.
                        Donec interdum ante in diam tristique commodo.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
