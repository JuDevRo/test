import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../Table/Table'
import './products.css'


const Products = () => {
  return (
    <div className='home-products'>
          <div className='products'>
            <h2 className='products-title'>Productos</h2>
            <Link to='/create'><button role="adding" className='products-btn'>+ &nbsp;&nbsp;Añadir Producto</button></Link>
            <br />
            <p className='show'>Show </p>
            <select className='select' name="numero" id="numero">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="1">6</option>
              <option value="2">7</option>
              <option value="3">8</option>
              <option value="4">9</option>
              <option value="5">10</option>
            </select>
            <p className='entries'>entries</p>
            <p className='search'>Search:</p>
            <input type="text" name="" id="search" />
          </div>
            <Table />
    </div>
  )
}

export default Products