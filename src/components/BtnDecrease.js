import React, { useState } from 'react';


 
const BtnDecrease = () => {

    const [counter, setCounter] = useState(0);

    const DecrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <div className="btn-Decrease" >
            <button data-testid="Decrement" onClick={DecrementCounter}></button>
            <p data-testid="minus-counter">{counter}</p>
        </div>
    );
}

export default BtnDecrease;
