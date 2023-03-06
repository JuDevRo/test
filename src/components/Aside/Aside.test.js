import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Aside from './Aside';

describe('Given a Table component', () => {
    describe('When invoked', () => {
        test('Then it should render the texts of the Products component', () => {
            render(
                <BrowserRouter>
                    <Aside />
                </BrowserRouter>
            )
            expect(screen.getByText('Productos')).toBeInTheDocument();
            expect(screen.getByText('Web')).toBeInTheDocument();
            expect(screen.getByText('Fichas')).toBeInTheDocument();
            expect(screen.getByText('Documentos')).toBeInTheDocument();
        })
    })
})