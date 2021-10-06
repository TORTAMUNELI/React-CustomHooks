import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({ handleAddToDo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddToDo(newToDo);

        reset();
    }

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className='form-control'
                    type='text'
                    name='description'
                    placeholder='Aprender ...'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />
                <div className="d-grid gap-2 mt-3">
                    <button
                        type='submit'
                        className="btn btn-outline-primary"
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </>
    )
}
