import React from 'react'
import { Link } from 'react-router-dom'
import prds from '../../db/products'
import espbackground from '../../assets/esp.png'
import engbackground from '../../assets/eng.png'
import './table.css'

const Table = () => {

    const español = {
        backgroundImage: `url(${espbackground})`,
    }
    
    const ingles = {
        backgroundImage: `url(${engbackground})`
    }

  return (
    <div className='home-table'>
    <table className='home-table'>
     <thead className='table-header'>
        <tr className='header-tr'>
          <th></th>
          <th>Código</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Webs</th>
          <th>Fichas</th>
          <th>Idiomas</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        {
          prds.map((prd) => (
            <Link key={prd.id} className='link' to={`/details/${prd.id}`}>
            <tr className='body-tr'>
              <td className='start'><div className='table-image'></div></td>
              <td>{prd.codigo}</td>
              <td>{prd.nombre}</td>
              <td>{prd.categoria}</td>
              {/* <td>{prd.webs}</td> */}
              {/* { prd.webs.length > 2 ? <td className='table-webs'>{`${prd.webs[0]} ${prd.webs[1]} + ${prd.webs.length - 2}`}</td> : <td className='table-webs'>{prd.webs}</td>} */}
              {(prd.webs.length > 2) ? <td className='table-webs'><span className='first'>{prd.webs[0]}</span><span className='second'>{prd.webs[1]}</span><span className='exceso'>+ {prd.webs.length - 2}</span> </td> : (prd.webs.length === 2) ? <td className='table-webs'><span className='first'>{prd.webs[0]}</span><span className='second'>{prd.webs[1]}</span></td> : <td className='table-webs'><span className='first'>{prd.webs[0]}</span></td>}
              {/* <td>{prd.fichas}</td> */}
              {(prd.fichas.length > 1) ? <td className='table-fichas'><span className='primero'>{prd.fichas[0]}</span><span className='segundo'>{prd.fichas[1]}</span></td> : (prd.fichas.length === 1) ? <td className='table-fichas'><span className='primero'>{prd.fichas[0]}</span></td> : <td className='table-fichas'>No hay fichas</td>}
              {/* <td style={{backgroundImage: `url(${espbackground})`}} className='end'>{prd.idiomas}</td> */}
              {(prd.idiomas[0] === 'esp' && prd.idiomas[1] === 'eng') ? <td ><div style={español} className='lg'></div><div className='lg' style={ingles}></div></td> : <td>No languages</td>}
            </tr>
            </Link>
          ))
        }
      </tbody>
    </table>
  </div>
  )
}

export default Table