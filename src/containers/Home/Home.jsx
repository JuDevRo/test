import React from 'react'
import Header from '../../components/Header/Header'
import Aside from '../../components/Aside/Aside'
import Products from '../../components/Products/Products'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <Header />
        <Aside />
        <Products />
    </div>
  )
}

export default Home