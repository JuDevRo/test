import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Details from './Details';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
      id: 3,
    }),
  }));

describe('Given a Detail component', () => {
    describe('When invoked', () => {
        test('Then it should render the texts before the inputs', () => {
            render(
                <BrowserRouter>
                    <Details />
                </BrowserRouter>
            )
            expect(screen.getByText('Código:')).toBeInTheDocument();
            expect(screen.getByText('Categoría:')).toBeInTheDocument();
            expect(screen.getByText('Webs:')).toBeInTheDocument();
            expect(screen.getByText('Fichas:')).toBeInTheDocument();
            expect(screen.getByText('Idiomas:')).toBeInTheDocument();
        })
        test('Then it shout render a value from the db', () => {
            render(
                <BrowserRouter>
                    <Details />
                </BrowserRouter>
            )
            expect(screen.getByText('Ficha Reparto')).toBeInTheDocument();
        })
        test('Then it shout the back button', () => {
            render(
                <BrowserRouter>
                    <Details />
                </BrowserRouter>
            )
            expect(screen.getByRole('back')).toBeInTheDocument();
        })
    })
})