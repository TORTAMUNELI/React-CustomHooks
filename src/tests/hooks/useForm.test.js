import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Jhon',
        email: 'email@email.com'
    };

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe cambiar el valor name del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Fernando'
                }
            });
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Fernando' });
    });

    test('Debe re-establecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Fernando'
                }
            });
            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    });
});
