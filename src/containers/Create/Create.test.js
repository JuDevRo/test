import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Create from './Create';



describe('Given a create component', () => {
    describe('When invoked', () => {
        test('Then it should the title', () => {
            render(
                <BrowserRouter>
                    <Create />
                </BrowserRouter>
            )
            expect(screen.getByText('Nuevo Producto')).toBeInTheDocument();
        })
        test('Then it should the back button', () => {
            render(
                <BrowserRouter>
                    <Create />
                </BrowserRouter>
            )
            expect(screen.getByRole('back')).toBeInTheDocument();
        })
        // test('Then it should if the function found', () => {
        //     render(
        //         <BrowserRouter>
        //             <Create />
        //         </BrowserRouter>
        //     )
        //     const acceptButton = screen.getByRole('ac');
        //     const nameInput = screen.getByText('Nombre:');
        //     const codeInput = screen.getByText('Código:');
        //     const categoryInput = screen.getByText('Categoría:');
        //     const spanishCheckbox = screen.getByRole('es');
        //     const englishCheckbox = screen.getByRole('en');

        //     const handleForm = jest.fn();

        //     acceptButton.addEventListener('click', handleForm);

        //     fireEvent.change(nameInput, { target: { value: 'Product Name' } });
        //     fireEvent.change(codeInput, { target: { value: 1234 } });
        //     fireEvent.change(categoryInput, { target: { value: 'Category' } });
        //     fireEvent.click(spanishCheckbox);
        //     fireEvent.click(englishCheckbox);
        //     fireEvent.click(acceptButton);

        //     expect(handleForm).toHaveBeenCalled();
        // })
    })
})