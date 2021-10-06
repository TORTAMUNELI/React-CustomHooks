import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [fromValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = fromValues;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        console.log(email);
    }, [email]);

    return (
        <>
            <h1>FormWithCustomHook</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <input type="text"
                        name="email"
                        className="form-control"
                        placeholder="email@email.email"
                        autoComplete="off" value={email}
                        onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <input type="password"
                        name="password"
                        className="form-control"
                        placeholder="********"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange} />
                </div>

                <button
                    className='btn btn-primary'
                    type='submit'>
                    Guardar
                </button>
            </form>
        </>
    )
}
