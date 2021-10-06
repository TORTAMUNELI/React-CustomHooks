import React from 'react'
import { shallow } from "enzyme";
import { ToDoListItem } from '../../../components/08-useReducer/ToDoListItem';
import { demoToDos } from '../../fixtures/demoToDos'

describe('Pruebas en <ToDoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<ToDoListItem
        toDo={demoToDos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);


    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe llamar la función handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoToDos[0].id);
    });

    test('Debe llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoToDos[0].id);
    });

    test('Debe mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoToDos[0].desc}`);
    });

    test('Debe tener la clase complete si el toDo.done es true', () => {
        const toDo = demoToDos[0];
        toDo.done = true;

        const wrapper = shallow(<ToDoListItem
            toDo={toDo}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
});