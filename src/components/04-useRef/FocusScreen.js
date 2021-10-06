import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
        // inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su Nombre'>
            </input>

            <button
                className='btn btn-outline-primary mt-3'
                onClick={handleClick}>
                Focus
            </button>
        </>
    );
}
