// Import dependencies
import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const NewUserPage = () => {
    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [valid, setValid] = useState(true);
    const [created, setCreated] = useState(false);

    // Methods
    const usernameInput = e => {
        setUsername(e.target.value);
        if (created || !valid) {
            setCreated(false);
            setValid(true);
        };
    };

    const passwordInput = e => {
        setPassword(e.target.value);
        if (created || !valid) {
            setCreated(false);
            setValid(true);
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (username !== '') {
            // addNewUser();
            if (password !== '') {
                Axios.post('http://localhost:5000/api/new-user', {username})
                .then(function(){
                    if (username.length < 4 || username.length > 16) {
                        setError('Please enter a username between 4 and 16 characters long');
                        setValid(false);
                        setCreated(false);
                    } else if (password.length < 6) {
                        setError('Please enter a password with at least 6 characters');
                        setValid(false);
                        setCreated(false);
                    } else {
                        const uppercasePassword = password.length - password.replace(/[A-Z]/g, '').length;
                        if (uppercasePassword === 0) {
                            setError('Please include uppercase, numbers and special characters in your password');
                            setValid(false);
                            setCreated(false);
                        } else {
                            const numbersPassword = password.length - password.replace(/[^0-9]/g, '').length;
                            if (numbersPassword === 0) {
                                setError('Please include uppercase, numbers and special characters in your password');
                                setValid(false);
                                setCreated(false);
                            } else {
                                const specialPassword = password.length - password.replace(/\W|_/g, '').length;
                                if (specialPassword === 0) {
                                    setError('Please include uppercase, numbers and special characters in your password');
                                    setValid(false);
                                    setCreated(false);
                                } else {
                                    setValid(true);
                                    setCreated(true);
                                    addNewUser();
                                }
                            }
                        }
                    }
                })
                .catch(function(err) {
                    setError(err.response.data.error);
                    setValid(false);
                    setCreated(false);
                });
            } else {
                setError('Please enter a password');
                setValid(false);
                setCreated(false);
            }
        } else {
            setError('Please enter a username');
            setValid(false);
            setCreated(false);
        };
    };

    const addNewUser = () => {
        Axios.post('http://localhost:5000/api/add-user',{username, password})
        .then(function(){
            setUsername('');
            setPassword('');
            console.log('User created successfullly!');
        })
        .catch(function(err) {
            console.error(err);
        });
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
            w-screen h-screen">
                <form
                className="
                w-2/5 h-2/5
                bg-neutral-50
                border border-neutral-200
                rounded-md
                shadow-lg
                flex flex-col
                mx-auto mt-24
                gap-2
                justify-center items-center"
                onSubmit={handleSubmit}>
                    <p
                    className="
                    w-full
                    font-display font-semibold
                    text-center
                    text-xs sm:text-base md:text-lg lg:text-xl
                    text-textblue">
                        Choose a username:
                    </p>
                    <input
                    onChange={usernameInput}
                    type="text"
                    className="
                    w-1/2
                    p-0.5 md:p-1
                    bg-neutral-50
                    border border-neutral-200
                    rounded-md
                    focus:outline-none
                    font-display
                    text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                    text-textblue"
                    placeholder="Username"
                    value={username}/>
                    <p
                    className="
                    w-full
                    font-display font-semibold
                    text-center
                    text-xs sm:text-base md:text-lg lg:text-xl
                    text-textblue">
                        Choose a password:
                    </p>
                    <input
                    onChange={passwordInput}
                    type="password"
                    className="
                    w-1/2
                    p-0.5 md:p-1
                    bg-neutral-50
                    border border-neutral-200
                    rounded-md
                    focus:outline-none
                    font-display
                    text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                    text-textblue"
                    placeholder="Password"
                    value={password}/>
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
                    <span
                    className="
                    w-3/4
                    font-display
                    text-center
                    text-xs sm:text-base md:text-lg lg:text-xl
                    text-green-500"
                    style={created === true ? style.visible : style.hidden}>
                        Account created!
                    </span>
                    <button
                    className="
                    w-1/2
                    mt-1 sm:mt-2 md:mt-4
                    p-0.5 md:p-1
                    py-1 md:py-2
                    bg-accentblue hover:bg-sky-500
                    transition-colors ease-in duration-75
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    text-neutral-50">
                        Submit
                    </button>
                    <Link
                    to="/"
                    className="
                    w-1/2
                    p-1 md:p-2
                    py-2 md:py-3
                    bg-neutral-50 hover:bg-accentblue
                    transition-colors ease-in duration-75
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    text-center
                    text-textblue hover:text-neutral-50">
                        Go Back
                    </Link>
                </form>
            </div>
        </React.Fragment>
    );
};

export default NewUserPage;