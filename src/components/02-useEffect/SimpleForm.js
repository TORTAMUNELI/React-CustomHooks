import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [fromState, setFromState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = fromState;

    const handleInputChange = ({ target }) => {
        setFromState({
            ...fromState,
            [target.name]: target.value
        });
    }

    //useEffect permite ejecutar un efecto secundario cuando se cambie algo en los componenetes
    useEffect(() => {
        // console.log('hey');
    }, []);

    useEffect(() => {
        // console.log('formState cambió');
    }, [fromState]);

    useEffect(() => {
        // console.log('Email Cambio');
    }, [email]);

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="email@email.email" autoComplete="off" value={email} onChange={handleInputChange} />
            </div>

            {(name === '123') && <Message />}

        </>
    )
}
