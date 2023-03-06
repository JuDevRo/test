import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from './Header';

describe('Given a Table component', () => {
    describe('When invoked', () => {
        test('Then it should render the title of the Header component', () => {
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            )
            expect(screen.getByText('regarsa')).toBeInTheDocument();
            expect(screen.getByText('Itxaro')).toBeInTheDocument();
        })
        
    })
})