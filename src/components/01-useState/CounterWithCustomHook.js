import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter With Hook: {counter} </h1>
            <hr />

            <button onClick={() => increment(5)} className="btn"> + 1</button>
            <button onClick={() => decrement(5)} className="btn"> - 1 </button>
            <button onClick={reset} className="btn"> Reiniciar </button>
        </>
    );
}
