import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Details from './containers/Details/Details';
import Create from './containers/Create/Create';
import './App.css';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/create" element={<Create/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;

