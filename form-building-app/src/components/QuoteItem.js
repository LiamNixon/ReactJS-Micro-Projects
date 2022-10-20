// import dependencies
import React, { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';

const QuoteItem = (props) => {

    // state
    const [id] = useState(props.itemId);
    const [itemDescription, setDescription] = useState(props.itemDescription);
    const [itemQuantity, setQuantity] = useState(props.itemQuantity);
    const [itemCPU, setCPU] = useState(props.itemCPU);
    const [itemUnitType, setType] = useState(props.itemUnitType);
    const [totalCost, setTotalCost] = useState(props.totalCost);

    // state handlers
    const changeDescription = (e) => {
        setDescription(e.target.value);
    };
    const changeQuantity = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setQuantity(e.target.value);
        };
    };
    const changeCPU = (value) => {
        setCPU(value);
    };
    const changeType = (e) => {
        setType(e.target.value);
    };

    useEffect(() => {
        props.updateDescriptionProps(id, itemDescription)
    }, [id, props, itemDescription]);

    useEffect(() => {
        props.updateQuantityProps(id, itemQuantity);
    }, [id, props, itemQuantity]);

    useEffect(() => {
        props.updateTypeProps(id, itemUnitType)
    }, [id, props, itemUnitType]);

    useEffect(() => {
        props.updatePriceProps(id, itemCPU)
    }, [id, props, itemCPU]);

    useEffect(() => {
        props.updateTotalProps(id, totalCost)
    }, [id, props, totalCost]);

    useEffect(() => {
        setTotalCost(itemQuantity * itemCPU)
    },[itemQuantity, itemCPU]);

    return (
        <div
        className="
        w-full
        flex
        gap-x-1 md:gap-x-2
        items-center">
            <div
            className="
            w-1/3
            mt-1 sm:mt-2 md:mt-4
            gap-y-0.5 md:gap-y-1">
                <input
                    className="
                    w-full
                    font-sans font-normal
                    text-xs sm:text-sm md:text-base lg:text-lg
                    text-slate-700 text-start
                    p-1" 
                    type="text"
                    value={itemDescription}
                    name="itemDescription"
                    onChange={changeDescription} />
            </div>
            <div
            className="
            w-1/6
            mt-1 sm:mt-2 md:mt-4
            gap-y-0.5 md:gap-y-1">
                <input
                    className="
                    w-full
                    font-sans font-normal
                    text-xs sm:text-sm md:text-base lg:text-lg
                    text-slate-700 text-start
                    p-1" 
                    type="text"
                    placeholder='0'
                    value={itemQuantity}
                    name="itemQuantity"
                    onChange={changeQuantity} />
            </div>
            <div
            className="
            w-1/6
            mt-1 sm:mt-2 md:mt-4
            gap-y-0.5 md:gap-y-1">
                <input
                    className="
                    w-full
                    font-sans font-normal
                    text-xs sm:text-sm md:text-base lg:text-lg
                    text-slate-700 text-start
                    p-1" 
                    type="text"
                    placeholder='pcs'
                    value={itemUnitType}
                    name="itemUnitType"
                    onChange={changeType} />
            </div>
            <div
            className="
            w-1/6
            mt-1 sm:mt-2 md:mt-4
            justify-start items-start
            gap-y-0.5 md:gap-y-1">
                <CurrencyInput
                    className="
                    w-full
                    font-sans font-normal
                    text-xs sm:text-sm md:text-base lg:text-lg
                    text-slate-700 text-start
                    p-1" 
                    prefix='$'
                    decimalsLimit={2}
                    name="itemCPU"
                    value={itemCPU}
                    onValueChange={(value) => changeCPU(value)} />
            </div>
            <div
            className="
            w-1/6
            mt-1 sm:mt-2 md:mt-4
            gap-y-0.5 md:gap-y-1">
                <CurrencyInput
                    className="
                    w-full
                    font-sans font-normal
                    text-xs sm:text-sm md:text-base lg:text-lg
                    text-slate-700 text-start
                    p-1" 
                    prefix='$'
                    decimalsLimit={2}
                    decimalScale={2}
                    name="totalCost"
                    value={totalCost}
                    readOnly />
            </div>
        </div>
    );
};

export default QuoteItem;