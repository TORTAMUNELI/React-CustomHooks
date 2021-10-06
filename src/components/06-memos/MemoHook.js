import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
            <h1>MemoHook</h1>
            <h2>Counter: <small>{counter}</small></h2>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
