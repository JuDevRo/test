import React from 'react'
import './aside.css'

const Aside = () => {
  return (
    <div className='home-aside'>
        <button className='btn pr'>Productos</button>
        <button className='btn web'>Web</button>
        <button className='btn fichas'>Fichas</button>
        <button className='btn docs'>Documentos</button>
    </div>
  )
}

export default Aside