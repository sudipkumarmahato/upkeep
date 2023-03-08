import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import Notfound from './components/common/notfound.jsx';
import Navbar from './components/layout/Navbar/index.jsx';
// import Activate from './pages/auth/activate.jsx';
import Login from './pages/auth/login.jsx';
import Footer from './components/layout/Footer/index.jsx';
// import Subscribe from './components/layout/Subscribe/index.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import SignUp from './pages/auth/signup.jsx';

const App = () => {
    const Layout = () => {
        return (
            <div className="app">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/about',
                    element: <About />,
                },
                {
                    path: '/auth/login',
                    element: <Login />,
                },
                {
                    path: '/auth/signup',
                    element: <SignUp />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
