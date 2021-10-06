import React from 'react'
import { shallow } from 'enzyme';
import { ToDoApp } from '../../../components/08-useReducer/ToDoApp'

describe('Pruebas en <ToDoApp />', () => {
    const wrapper = shallow(<ToDoApp />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
