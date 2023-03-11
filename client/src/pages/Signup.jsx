import React from 'react';
import { Link } from 'react-router-dom';
import SignupImage from '../assets/images/bgSignup.jpg';

const SignupPage = () => {
    return (
        <div className="flex h-screen w-screen bg-black">
            <div
                className="hidden lg:block w-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url(${SignupImage})` }}
            ></div>
            <div className="w-full lg:w-1/2 bg-white flex justify-center items-center">
                <form className="px-8 py-6">
                    <h1 className="text-3xl font-bold mb-1">Welcome!</h1>
                    <h4 className="text-md mb-4 font-light">
                        Let's create your account
                    </h4>
                    <div className="mb-4">
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Full Name:
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="w-full rounded-md border border-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full  rounded-md border border-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Address:
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="w-[420px] rounded-md border border-gray-400 p-2"
                        />
                    </div>
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
                            className="w-full rounded-md border border-gray-400 p-2"
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
                            className="w-full rounded-md border border-gray-400 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full rounded-md border border-gray-400 p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline hover:bg-green-600 w-full rounded-md"
                    >
                        Sign Up
                    </button>
                    <div className="mt-4 text-gray-700 text-center">
                        Already have an account?
                        <Link
                            to="/login"
                            className="font-bold text-green-500 hover:text-green-700"
                        >
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
