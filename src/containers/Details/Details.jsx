import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import prds from '../../db/products'
import backimg from '../../assets/back.png'
import espbackground from '../../assets/esp.png'
import engbackground from '../../assets/eng.png'
import './details.css'

const Details = () => {
  const [id, setId] = useState(0)
  const params = useParams()

  const back = {
    backgroundImage: `url(${backimg})`,
  }

  const español = {
    backgroundImage: `url(${espbackground})`,
  }

  const ingles = {
    backgroundImage: `url(${engbackground})`
  }
  
  useEffect(() => {
    const aidi = parseInt(params.id)
    setId(aidi)
    
    console.log(aidi)
  }, [params])
  const prd = prds[id]
  console.log(prd)

  return (
    <div className='container-details'>
      <Link to="/" className='link-details'>
        <span role='back' style={back} className='details-back'></span>
      </Link>
      <div className='details-data'>
        <h2>{prd.nombre}</h2>
        <h3>Código: &nbsp;</h3><p>{prd.codigo}</p> <br />
        <h3>Categoría: &nbsp;</h3><p>{prd.categoria}</p> <br />
        <h3>Webs: &nbsp;</h3>{(prd.webs.length) === 5 ? <div className='no-space'><span className='uno'>{prd.webs[0]}</span><span className='dos'>{prd.webs[1]}</span><span className='tres'>{prd.webs[2]}</span><span className='cuatro'>{prd.webs[3]}</span><span className='cinco'>{prd.webs[4]}</span></div> : (prd.webs.length) === 2  ? <div className='no-space' ><span className='uno'>{prd.webs[0]}</span> <span className='dos'>{prd.webs[1]}</span></div> : <span className='uno'>{prd.webs}</span>} <br />
        <h3>Fichas: &nbsp;</h3>{(prd.fichas.length) === 2 ? <div className='no-space'><span className='one'>{prd.fichas[0]}</span><span className='two'>{prd.fichas[1]}</span></div> : <span className='one'>{prd.fichas}</span>} <br />
        <h3>Idiomas: &nbsp;</h3>{(prd.idiomas.length) === 2 ? <div className='no-space'><span className='lengua' style={español}></span><span className='lengua' style={ingles}></span></div> : <span>No hay idiomas</span>} <br />
      </div>
      <div className='details-img'>
        
      </div>
    </div>
  )
}

export default Details