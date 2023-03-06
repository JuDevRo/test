import {render, screen} from '@testing-library/react'
import Home from './Home';
import { BrowserRouter } from "react-router-dom";


describe(('Given a Home component'), () => {
    describe('When invoked', () => {
        test('Then it should render the header', () => {
            //Arrange
            render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
            //Act
    
            //Assert
            expect(screen.getByText('regarsa')).toBeInTheDocument();
        })
        test('Then it should render the aside', () => {
            //Arrange
            render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
            //Act
    
            //Assert
            expect(screen.getByText('Documentos')).toBeInTheDocument();
        })
        test('Then it should render the element in the Products component', () => {
            //Arrange
            render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
            //Act
    
            //Assert
            expect(screen.getByText('Show')).toBeInTheDocument();
        })
    })
    
})