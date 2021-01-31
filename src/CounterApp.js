import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp =  ({ value = 10 }) => {

    const [ counter, setCounter ] = useState(value);

    //handleAdd
    const handleAdd = () => {
        //setCounter(counter + 1)
        setCounter( (c) => c + 1)
    }

    //handleDis
    const handleDis = () => setCounter(counter - 1);
    //handleDis
    const handleRest = () => setCounter(value);        

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleRest }>RESET</button>
            <button onClick={ handleDis }>-1</button>
        </>    
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;