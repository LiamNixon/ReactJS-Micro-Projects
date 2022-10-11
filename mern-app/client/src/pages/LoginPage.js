// Import dependencies
import React, { useState } from 'react';

const LoginPage = () => {

    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);
    const [error, setError] = useState('');

    // Methods
    const inputUsername = (e) => {
        setUsername(e.target.value);
    };

    const inputPassword = (e) => {
        setPassword(e.target.value);
    };

    const login = (e) => {
        e.preventDefault();
        setError('');
        setValid(!valid);
        if (username === '') {
            setError('Please enter a valid username');
            return;
        } else if (password === '') {
            setError('Please enter a valid password');
            return;
        }
        console.log('Login');
    };

    const createUser = (e) => {
        e.preventDefault();
        console.log('Create User');
    };

    // Styles
    const style = {
        visible: {
            display: 'block',
            opacity: 1
        },
        hidden: {
            display: 'none',
            opacity: 0
        }
    };

    return (
        <React.Fragment>
            <div
            className="
            flex
            w-full h-screen">
                <div
                className="
                w-2/5 h-full
                bg-accentblue
                flex flex-col">
                    <div
                    className="
                    absolute
                    w-2/5
                    top-24 sm:top-28 md:top-32 lg:top-36
                    left-1 sm:left-2 md:left-4 lg:left-8
                    flex flex-col">
                        <h2
                        className="
                        w-11/12
                        font-display font-semibold
                        text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                        text-neutral-50">
                            Login page project.
                        </h2>
                        <p
                        className="
                        w-11/12
                        mt-1 sm:mt-2 lg:mt-4
                        font-display
                        text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                        text-neutral-50">
                            A simple login screen, feel free to create a new account!
                        </p>
                        <span
                        className="
                        w-11/12
                        mt-1 sm:mt-2 lg:mt-4
                        font-display
                        text-xs sm:text-base md:text-lg lg:text-xl
                        text-neutral-50">
                            *Login is purely demonstrative.
                        </span>
                    </div>
                    <div
                    className="
                    absolute
                    w-1/3 
                    bottom-2 sm:bottom-4 md:bottom-8 lg:bottom-12 
                    left-1 sm:left-2 md:left-4 lg:left-8
                    font-display font-medium
                    text-neutral-50">
                        <p
                        className="
                        text-sm sm:text-lg md:text-xl lg:text-2xl">
                            Created by Liam Nixon.
                        </p>
                        <p
                        className="
                        text-xs sm:text-base md:text-lg lg:text-xl">
                            Built with React.
                        </p>
                    </div>
                </div>
                <div
                className="
                w-3/5 h-full
                bg-neutral-50
                flex justify-center items-center">
                    <div
                    className="
                    w-3/5 h-3/5
                    bg-neutral-50
                    border border-neutral-200
                    rounded-md
                    shadow-md
                    flex flex-col
                    gap-2
                    justify-center items-center">
                        <h1
                        className="
                        w-2/3 
                        text-center
                        uppercase
                        font-display font-semibold
                        text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                        text-textblue">
                            Sign in
                        </h1>
                        <h3
                        className="
                        w-11/12
                        mb-2 sm:mb-4 md:mb-8
                        text-center
                        uppercase
                        font-display font-medium
                        text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                        text-textblue">
                            To access the portal
                        </h3>
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={inputUsername}
                            className="
                            w-3/4
                            p-1 md:p-2
                            bg-neutral-50
                            border border-neutral-200
                            rounded-md
                            focus:outline-none
                            font-display
                            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                            text-textblue" />
                        <input
                            type="password" 
                            placeholder='Password'
                            value={password}
                            onChange={inputPassword}
                            className="
                            w-3/4
                            mb-2 sm:mb-4 md:mb-8
                            p-1 md:p-2
                            bg-neutral-50
                            border border-neutral-200
                            rounded-md
                            focus:outline-none
                            font-display
                            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                            text-textblue"/>
                        <span
                        className="
                        w-3/4
                        font-display
                        text-center
                        text-xs sm:text-base md:text-lg lg:text-xl
                        text-red-500"
                        style={valid === false && error !== '' ? style.visible : style.hidden}>
                            {error}
                        </span>
                        <button
                        className="
                        w-3/4
                        p-1 md:p-2
                        py-2 md:py-3
                        bg-accentblue hover:bg-sky-500
                        transition-colors ease-in duration-75
                        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                        text-neutral-50"
                        onClick={login}>
                            Sign In
                        </button>
                        <button
                        className="
                        w-3/4
                        p-1 md:p-2
                        py-2 md:py-3
                        bg-neutral-50 hover:bg-accentblue
                        transition-colors ease-in duration-75
                        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                        text-textblue hover:text-neutral-50">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LoginPage;