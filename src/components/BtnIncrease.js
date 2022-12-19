import React, { useState } from 'react';


 
const BtnIncrease = () => {

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return (
        <div className="btn-increase" >
            <button data-testid="increment" onClick={incrementCounter}></button>
            <p data-testid="counter">{counter}</p>
        </div>
    );
}

export default BtnIncrease;
