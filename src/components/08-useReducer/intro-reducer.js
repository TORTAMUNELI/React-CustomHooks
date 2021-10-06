const initialState = [{
    id: 1,
    toDo: 'Comprar Leche',
    done: false
}];

const toDoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    return state;
}

let toDos = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'Comprar Pan',
    done: false
};

const agregarToDoAction = {
    type: 'agregar',
    payload: newToDo
};

toDos = toDoReducer(toDos, agregarToDoAction);

console.log(toDos);