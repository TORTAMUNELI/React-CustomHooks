import React from 'react'
import PropTypes from 'prop-types';

export const ToDoListItem = ({ index, toDo, handleDelete, handleToggle }) => {
    return (
        <li
            key={toDo.id}
            className='list-group-item'
        >
            <p
                className={`${toDo.done && 'complete'}`}
                onClick={() => handleToggle(toDo.id)}
            >{index + 1}. {toDo.desc}</p>
            <button
                className='btn btn-danger'
                onClick={() => handleDelete(toDo.id)}
            >
                Borrar
            </button>
        </li>
    )
}

ToDoListItem.propTypes = {
    index: PropTypes.number.isRequired,
    toDo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}