import React from 'react';
import { shallow } from 'enzyme';
import { ToDoList } from '../../../../components/08-useReducer/ToDoList';
import { demoToDos } from '../../../fixtures/demoToDos';

describe('Pruebas en <ToDoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<ToDoList
        toDos={demoToDos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener demoToDos.length <ToDoListItem />', () => {
        expect(wrapper.find('ToDoListItem').length).toBe(demoToDos.length);
    });
});
