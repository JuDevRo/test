import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import Create from './containers/Create/Create';

describe('Given a router', () => { 
  describe('When invoked', () => {
    test('Then it should the main route', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    
      expect(screen.getByText('regarsa')).toBeInTheDocument();
    });
    test('Then it should the create route', () => {
      render(
        <BrowserRouter>
          <Create />
        </BrowserRouter>
      );
      expect(screen.getByText('Nuevo Producto', {exact: true})).toBeInTheDocument();
    })
  })
});
