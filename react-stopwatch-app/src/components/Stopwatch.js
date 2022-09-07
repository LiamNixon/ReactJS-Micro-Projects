// Import modules
import React, { useState, useEffect } from 'react';

// Stylesheet
import '../css/Stopwatch.css';

const Stopwatch = () => {
    
    // State hook
    const [stopwatch, setStopwatch] = useState((setInitialTimer()));

    // Initialise state
    function setInitialTimer() {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            counting: false
        };
    };

    // Methods
    const convertToString = (input) => {
        let tempString = '';
        input < 10 ? tempString = ('0' + input) : tempString = input;
        return tempString;
    }

    const toggleStopwatch = (e) => {
        e.preventDefault();
        
        setStopwatch(prevState => {
            return {
                ...prevState,
                counting: !prevState.counting
            };
        });
    };

    const resetStopwatch = (e) => {
        e.preventDefault();
        setStopwatch({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            counting: false
        })
    };

    useEffect(() => {
        let interval = null;
        if (stopwatch.counting === true) {
            interval = setInterval(() => {
                setStopwatch((prevState) => {
                    return {
                        ...prevState,
                        milliseconds: prevState.milliseconds + 1
                    };
                });
            }, 10)
        };
        return () => {
            clearInterval(interval);
        };
    }, [stopwatch.counting]);

    useEffect(() => {
        if (stopwatch.milliseconds >= 99) {
            setStopwatch(prevState => {
                return {
                    ...prevState,
                    milliseconds: 0,
                    seconds: prevState.seconds + 1
                };
            });
        };
        if (stopwatch.seconds === 60) {
            setStopwatch(prevState => {
                return {
                    ...prevState,
                    seconds: 0,
                    minutes: prevState.minutes + 1
                };
            });
        };
        if (stopwatch.minutes === 60) {
            setStopwatch(prevState => {
                return {
                    ...prevState,
                    minutes: 0,
                    hours: prevState.hours + 1
                };
            });
        };
    }, [stopwatch.milliseconds, stopwatch.seconds, stopwatch.minutes]);

    // Inline styles
    const visibleStyle = {
        display: 'block'
    };

    const hiddenStyle = {
        display: 'none'
    };

    return (
        <React.StrictMode>
            <div id='stopwatchContainer'>
                <div id='stopwatchWrapper' className='colContainer'>
                    <div className='rowContainer'>
                        <div className='colContainer'>
                            <p className='valueLarge'>{ convertToString(stopwatch.hours) }</p>
                            <span className='unitChars'>hh</span>
                        </div>
                        <span className='divider'>:</span>
                        <div className='colContainer'>
                            <p className='valueLarge'>{ convertToString(stopwatch.minutes) }</p>
                            <span className='unitChars'>mm</span>
                        </div>
                        <span className='divider'>:</span>
                        <div className='colContainer'>
                            <p className='valueLarge'>{ convertToString(stopwatch.seconds) }</p>
                            <span className='unitChars'>ss</span>
                        </div>
                        <span className='divider'>:</span>
                        <span className='valueSmall'>{ convertToString(stopwatch.milliseconds) }</span>
                    </div>
                    <button onClick={toggleStopwatch} className='toggleButton'>
                        <span style={stopwatch.counting === true ? hiddenStyle : visibleStyle} className='material-icons iconStyle'>play_arrow</span>
                        <span style={stopwatch.counting === true ? visibleStyle : hiddenStyle} className='material-icons iconStyle'>pause</span>
                    </button>
                    <button onClick={resetStopwatch} className='resetButton'>
                        <span className='material-icons iconStyle'>replay</span>
                    </button>
                </div>
            </div>
        </React.StrictMode>
    );

};

export default Stopwatch;