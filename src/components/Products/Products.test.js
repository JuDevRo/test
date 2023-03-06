import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Products from './Products';

describe('Given a Table component', () => {
    describe('When invoked', () => {
        test('Then it should render the texts of the Products component', () => {
            render(
                <BrowserRouter>
                    <Products />
                </BrowserRouter>
            )
            expect(screen.getByText('Productos')).toBeInTheDocument();
            expect(screen.getByText('Show')).toBeInTheDocument();
            expect(screen.getByText('Search:')).toBeInTheDocument();
        })
        test('Then it shout the add button', () => {
            render(
                <BrowserRouter>
                    <Products />
                </BrowserRouter>
            )
            expect(screen.getByRole('adding')).toBeInTheDocument();
        })
    })
})