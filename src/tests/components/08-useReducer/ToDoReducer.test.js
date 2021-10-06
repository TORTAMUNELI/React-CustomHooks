import { toDoReducer } from '../../../components/08-useReducer/toDoReducer'
import { demoToDos } from '../../fixtures/demoToDos'

describe('Pruebas en ToDoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = toDoReducer(demoToDos, {});
        expect(state).toEqual(demoToDos);
    });

    test('Debe de agregar un toDo', () => {
        const newToDo = {
            id: 3,
            desc: 'Nueva tarea',
            done: false
        }

        const action = {
            type: 'add',
            payload: newToDo
        }

        const state = toDoReducer(demoToDos, action);
        expect(state.length).toBe(demoToDos.length + 1);
        expect(state).toEqual([...demoToDos, newToDo]);
    });

    test('Debe de borrar un toDo', () => {
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = toDoReducer(demoToDos, action);
        expect(state.length).toBe(demoToDos.length - 1);
    });

    test('Debe hacer el toggle de la tarea', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = toDoReducer(demoToDos, action);
        expect(state[0].done).toBe(true);
    });
});
