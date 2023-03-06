import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Table from './Table';

describe('Given a Table component', () => {
    describe('When invoked', () => {
        test('Then it should render the texts of the table', () => {
            render(
                <BrowserRouter>
                    <Table />
                </BrowserRouter>
            )
            expect(screen.getByText('Código')).toBeInTheDocument();
            expect(screen.getByText('Nombre')).toBeInTheDocument();
            expect(screen.getByText('Categoría')).toBeInTheDocument();
            expect(screen.getByText('Webs')).toBeInTheDocument();
            expect(screen.getByText('Fichas')).toBeInTheDocument();
            expect(screen.getByText('Idiomas')).toBeInTheDocument();
        })
    })
})