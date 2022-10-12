// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <React.Fragment>
            <div
            className="
            w-screen h-screen">
                <div
                className="
                w-2/5 h-2/5
                bg-neutral-50
                border border-neutral-200
                rounded-md
                shadow-lg
                flex flex-col
                mx-auto mt-24
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
                        Whoops!
                    </h1>
                    <h3
                    className="
                    w-11/12
                    mb-2 sm:mb-4 md:mb-8
                    text-center
                    uppercase
                    font-display font-medium
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    text-textblue">
                        The page you are looking for doesn't exist.
                    </h3>
                    <Link
                    to="/"
                    className="
                    w-2/5
                    p-1 md:p-2
                    py-2 md:py-3
                    bg-accentblue hover:bg-sky-500
                    transition-colors ease-in duration-75
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    text-neutral-50
                    text-center">
                        Return to home page
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ErrorPage;