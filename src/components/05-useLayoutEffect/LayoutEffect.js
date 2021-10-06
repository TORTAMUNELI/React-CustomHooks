import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    const pTag = useRef();


    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-end'>
                <p
                    ref={pTag}
                >{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>

            <button
                className='btn btn-primary'
                onClick={() => increment()}>
                Siguiente frase
            </button>
        </>
    )
}
