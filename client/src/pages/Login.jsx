import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/images/bgLogin.jpg';

const Login = () => {
    return (
        <div className="flex h-screen w-screen bg-black">
            <div
                className="hidden lg:block w-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url(${loginImage})` }}
            ></div>
            <div className="w-full lg:w-1/2 bg-white flex justify-center items-center">
                <form className="px-8 py-6">
                    <h2 className="text-2xl mb-4">Login</h2>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-[420px] border border-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-400 p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600 w-full"
                    >
                        Login
                    </button>
                    <div className="mt-4 text-gray-700 text-center">
                        Did not have an account?
                        <Link
                            to="/signup"
                            className="font-bold text-green-500 hover:text-green-700"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
