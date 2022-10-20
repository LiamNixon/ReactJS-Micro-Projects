// import dependencies
import dayjs from "dayjs";
import React from "react";
import QuotePDF from '../components/QuotePDF';

// components
import QuoteItem from '../components/QuoteItem';
import QuoteLabels from '../components/QuoteLabels';
import Divider from '../components/Divider';

// images
import logoSVG from '../assets/TLogo.svg';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: logoSVG,
            website: 'totaltradieco.com.au',
            abn: '51 824 753 556',
            quoteNo: 1,
            issueDate: dayjs().format('DD/MM/YYYY'),
            validUntil: dayjs().format('DD/MM/YYYY'),
            validDays: '',
            validWeeks: '',
            validMonths: '',
            ownerEmail: 'liam_nixon@outlook.com',
            ownerName: 'Total Tradie Co.',
            ownerAddress: '123 Tradie Lane',
            ownerCity: 'Tradesville',
            ownerState: 'VIC',
            ownerPostcode: '3189',
            ownerCountry: 'Australia',
            clientEmail: '',
            clientFirstName: '',
            clientSurname: '',
            clientAddress: '',
            clientCity: '',
            clientState: '',
            clientPostcode: '',
            clientCountry: '',
            quoteList: [{id: 1, desc: '', qty: '', type: '', price: 0, total: 0}],
            subtotalCost: 0,
            gstCost: 0,
            totalCost: 0,
            index: 1,
            pdf: []
        };
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    addQuote = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            index: prevState.index + 1,
            quoteList: [...prevState.quoteList, {id: prevState.index + 1, desc: '', qty: '', type: '', price: 0, total: 0}]
        }));
    };

    previewQuote = (e) => {
        e.preventDefault();

        let subtotal = 0;
        const subtotalArray = this.state.quoteList.map((c, i) => {
            return c.total;
        });
        for (const sub of subtotalArray) {
            subtotal = subtotal + sub;
        };
        subtotal = subtotal.toFixed(2);
        let gst = subtotal * 0.1;
        let total = subtotal + gst;

        subtotal = '$' + subtotal;
        gst = '$' + gst;
        total = '$' + total;

        this.setState({
            subtotalCost: subtotal,
            gstCost: gst,
            totalCost: total,
            pdf: [1],
            visible: true
        });
    };

    hideQuote = (e) => {
        e.preventDefault();
        this.setState({
            pdf: [],
            visible: false
        });
    };

    sendQuote = (e) => {
        e.preventDefault();
    };

    removeQuote = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            quoteList: [
                ...this.state.quoteList.filter(quote => {
                    return quote.id !== this.state.index
                })
            ],
            index: prevState.index - 1
        }));
    };

    updateDescription = (id, description) => {
        this.state.quoteList.map((c, i) => {
            if (i !== id - 1) {
                return c;
            } else {
                c.desc = description;
                return c;
            };
        });
    };

    updateQuantity = (id, quantity) => {
        this.state.quoteList.map((c, i) => {
            if (i !== id - 1) {
                return c;
            } else {
                c.qty = quantity;
                return c;
            };
        });
    };

    updateType = (id, type) => {
        this.state.quoteList.map((c, i) => {
            if (i !== id - 1) {
                return c;
            } else {
                c.type = type;
                return c;
            };
        });
    };

    updatePrice = (id, price) => {
        this.state.quoteList.map((c, i) => {
            if (i !== id - 1) {
                return c;
            } else {
                c.price = price;
                return c;
            };
        });
    };

    updateTotal = (id, total) => {
        this.state.quoteList.map((c, i) => {
            if (i !== id - 1) {
                return c;
            } else {
                c.total = total;
                return c;
            };
        });
    };

    render() {
            // styles
    const style = {
        visible: {
            display: 'flex',
            opacity: 1
        },
        hidden: {
            display: 'none',
            opacity: 0
        }
    }
        return (
            <div
            className="
            bg-slate-200 
            flex flex-col
            w-screen h-full max-w-full max-h-full
            justify-start items-center">
                <h1
                className="
                pt-8 sm:pt-16 md:pt-32
                w-4/5 md:w-4/6
                font-sans font-medium
                text-base sm:text-xl md:text-2xl lg:text-3xl
                text-slate-700">
                    Quote builder
                </h1>
                <p
                className="
                w-4/5 md:w-4/6
                mt-1 sm:mt-2 md:mt-4
                font-sans font-normal
                text-sm sm:text-base md:text-lg lg:text-xl
                text-slate-700">
                    Use the forms below to build your quote quickly and easily!
                    <br/>
                    Preview your finished quote using the button at the end of the form, before saving a copy and sending it to your client.
                </p>
                <form
                className="
                w-4/5 md:w-4/6
                flex flex-col
                justify-start items-start
                gap-y-1 md:gap-y-2">
                    <Divider/>
                    <h2
                    className="
                    mt-1 sm:mt-2 md:mt-4
                    w-full
                    font-sans font-medium
                    text-base sm:text-xl md:text-2xl lg:text-3xl
                    text-slate-700">
                        Client details
                    </h2>
                    <label
                    className="
                    mt-1 sm:mt-2 md:mt-4
                    font-sans font-medium
                    text-sm sm:text-base md:text-lg lg:text-xl
                    text-slate-700 text-start">
                        Email address
                    </label>
                    <input
                        className="
                        w-full
                        font-sans font-normal
                        text-sm sm:text-base md:text-lg lg:text-xl
                        text-slate-700 text-start
                        p-1" 
                        type="text"
                        value={this.state.clientEmail}
                        name="clientEmail"
                        onChange={this.onChange} />
                    <div
                    className="
                    w-full
                    flex
                    gap-x-1 md:gap-x-2
                    items-center">
                        <div
                        className="
                        w-1/2
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                First name
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                value={this.state.clientFirstName}
                                name="clientFirstName"
                                onChange={this.onChange} />
                        </div>
                        <div
                        className="
                        w-1/2
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                Surname
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                value={this.state.clientSurname}
                                name="clientSurname"
                                onChange={this.onChange} />
                        </div>
                    </div>
                    <label
                    className="
                    mt-1 sm:mt-2 md:mt-4
                    font-sans font-medium
                    text-sm sm:text-base md:text-lg lg:text-xl
                    text-slate-700 text-start">
                        Street address
                    </label>
                    <input
                        className="
                        w-full
                        font-sans font-normal
                        text-sm sm:text-base md:text-lg lg:text-xl
                        text-slate-700 text-start
                        p-1" 
                        type="text"
                        value={this.state.clientAddress}
                        name="clientAddress"
                        onChange={this.onChange} />
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
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                City
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                value={this.state.clientCity}
                                name="clientCity"
                                onChange={this.onChange} />
                        </div>
                        <div
                        className="
                        w-1/3
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                Country
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                value={this.state.clientCountry}
                                name="clientCountry"
                                onChange={this.onChange} />
                        </div>
                    </div>
                    <div
                    className="
                    w-full
                    flex
                    gap-x-1 md:gap-x-2
                    items-center">
                        <div
                        className="
                        w-1/3 sm:w-1/5
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                State
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                value={this.state.clientState}
                                name="clientState"
                                onChange={this.onChange} />
                        </div>
                        <div
                        className="
                        w-1/3 sm:w-1/5
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                Postcode
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                value={this.state.clientPostcode}
                                name="clientPostcode"
                                onChange={this.onChange} />
                        </div>
                    </div>
                    <Divider/>
                    <h2
                    className="
                    mt-1 sm:mt-2 md:mt-4
                    w-full
                    font-sans font-medium
                    text-base sm:text-xl md:text-2xl lg:text-3xl
                    text-slate-700">
                        Quote list
                    </h2>
                    <div
                    className="
                    mt-1 sm:mt-2 md:mt-4
                    w-full
                    gap-x-1 md:gap-x-2">
                        <QuoteLabels />
                        {
                            this.state.quoteList.map((item, index) => {
                                return (
                                    <QuoteItem
                                    key={index} 
                                    itemId={item.id}
                                    itemDescription={item.desc}
                                    itemQuantity={item.qty}
                                    itemCPU={item.price}
                                    itemUnitType={item.type}
                                    totalCost={item.total}
                                    updateDescriptionProps={this.updateDescription}
                                    updateQuantityProps={this.updateQuantity}
                                    updateTypeProps={this.updateType}
                                    updatePriceProps={this.updatePrice}
                                    updateTotalProps={this.updateTotal}/>
                                );
                            })
                        }
                        <div
                        className="
                        mt-1 sm:mt-2 md:mt-4
                        w-full
                        flex
                        gap-x-1 md:gap-x-2">
                            <button
                            className="
                            material-icons
                            text-lg sm:text-xl md:text-2xl lg:text-3xl
                            rounded-md
                            text-slate-700 hover:text-neutral-50
                            bg-neutral-50 hover:bg-green-600
                            px-1 lg:px-0.5"
                            onClick={this.addQuote}>
                                add
                            </button>
                            <button
                            className="
                            material-icons
                            text-lg sm:text-xl md:text-2xl lg:text-3xl
                            rounded-md
                            text-slate-700 hover:text-neutral-50
                            bg-neutral-50 hover:bg-red-600
                            px-1 lg:px-0.5"
                            onClick={this.removeQuote}>
                                remove
                            </button>
                        </div>
                    </div>
                    <Divider/>
                    <h2
                    className="
                    mt-1 sm:mt-2 md:mt-4
                    w-full
                    font-sans font-medium
                    text-base sm:text-xl md:text-2xl lg:text-3xl
                    text-slate-700">
                        Valid for
                    </h2>
                    <div
                    className="
                    w-full
                    flex
                    gap-x-1 md:gap-x-2
                    items-center">
                        <div
                        className="
                        w-1/6
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                Days
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                placeholder="0"
                                value={this.state.validDays}
                                name="validDays"
                                onChange={this.onChange} />
                        </div>
                        <div
                        className="
                        w-1/6
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                Weeks
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                placeholder="0"
                                value={this.state.validWeeks}
                                name="validWeeks"
                                onChange={this.onChange} />
                        </div>
                        <div
                        className="
                        w-1/6
                        mt-1 sm:mt-2 md:mt-4
                        flex flex-col
                        justify-start items-start
                        gap-y-1 md:gap-y-2">
                            <label
                            className="
                            font-sans font-medium
                            text-sm sm:text-base md:text-lg lg:text-xl
                            text-slate-700 text-start">
                                Months
                            </label>
                            <input
                                className="
                                w-full
                                font-sans font-normal
                                text-sm sm:text-base md:text-lg lg:text-xl
                                text-slate-700 text-start
                                p-1" 
                                type="text"
                                placeholder="0"
                                value={this.state.validMonths}
                                name="validMonths"
                                onChange={this.onChange} />
                        </div>
                    </div>
                    <Divider/>
                    <div
                        className="
                        mt-1 sm:mt-2 md:mt-4
                        w-full
                        flex
                        justify-center
                        gap-x-1 md:gap-x-2">
                            <button
                            className="
                            text-lg sm:text-xl md:text-2xl lg:text-3xl
                            rounded-md
                            text-slate-700 hover:text-neutral-50
                            bg-neutral-50 hover:bg-green-600
                            px-2 md:px-4
                            py-1 md:py-2"
                            onClick={this.sendQuote}>
                                Send
                            </button>
                            <button
                            className="
                            text-lg sm:text-xl md:text-2xl lg:text-3xl
                            rounded-md
                            text-slate-700 hover:text-neutral-50
                            bg-neutral-50 hover:bg-red-600
                            px-2 md:px-4
                            py-1 md:py-2"
                            onClick={this.previewQuote}>
                                Preview
                            </button>
                        </div>
                </form>
                <div
                className="
                fixed
                top-0 left-0">
                    <button
                            className="
                            absolute
                            top-2 left-1/3
                            material-icons
                            text-lg sm:text-xl md:text-2xl lg:text-3xl
                            rounded-md
                            text-slate-700 hover:text-neutral-50
                            bg-neutral-50 hover:bg-red-600
                            px-1 lg:px-0.5"
                            onClick={this.hideQuote}
                            style={this.state.visible === true ? style.visible : style.hidden}>
                                close
                            </button>
                    {
                        this.state.pdf.map((c, i) => {
                            return (
                                <QuotePDF
                                key={i}
                                logo={this.state.logo}
                                abn={this.state.abn}
                                quoteNo={this.state.quoteNo}
                                issueDate={this.state.issueDate}
                                validTil={dayjs().add(this.state.validDays, 'day').add(this.state.validWeeks, 'week').add(this.state.validMonths, 'month').format('DD/MM/YYYY')}
                                ownerEmail={this.state.ownerEmail}
                                ownerName={this.state.ownerName}
                                ownerAddress={this.state.ownerAddress}
                                ownerCity={this.state.ownerCity}
                                ownerState={this.state.ownerState}
                                ownerPostcode={this.state.ownerPostcode}
                                ownerCountry={this.state.ownerCountry}
                                clientEmail={this.state.clientEmail}
                                clientFirstName={this.state.clientFirstName}
                                clientSurname={this.state.clientSurname}
                                clientAddress={this.state.clientAddress}
                                clientCity={this.state.clientCity}
                                clientState={this.state.clientState}
                                clientPostcode={this.state.clientPostcode}
                                clientCountry={this.state.clientCountry}
                                quoteList={this.state.quoteList}
                                subtotalCost={this.state.subtotalCost}
                                gstCost={this.state.gstCost}
                                totalCost={this.state.totalCost}/>
                            )
                        })
                    }
                </div>
                <div
                className="
                pb-8 sm:pb-16 md:pb-32">

                </div>
            </div>
        )
    };
};