// import dependencies
import React from 'react';

const QuoteLabels = () => {

    return(
        <div
        className="
        w-full
        flex
        gap-x-1 md:gap-x-2
        items-center">
            <label
            className="
            w-1/3
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            hidden sm:inline-block">
                Item Description
            </label>
            <label
            className="
            w-1/3
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            inline-block sm:hidden">
                Description
            </label>
            <label
            className="
            w-1/6
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start">
                QTY
            </label>
            <label
            className="
            w-1/6
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            hidden sm:inline-block">
                Unit Type
            </label>
            <label
            className="
            w-1/6
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            inline-block sm:hidden">
                Type
            </label>
            <label
            className="
            w-1/6
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            hidden sm:inline-block">
                Price/Unit
            </label>
            <label
            className="
            w-1/6
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            inline-block sm:hidden">
                Price
            </label>
            <label
            className="
            w-1/6
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            hidden sm:inline-block">
                Total Cost
            </label>
            <label
            className="
            w-1/6
            font-sans font-medium
            text-sm sm:text-base md:text-lg lg:text-xl
            text-slate-700 text-start
            inline-block sm:hidden">
                Total
            </label>
        </div>
    )
};

export default QuoteLabels;