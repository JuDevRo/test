import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import backimg from '../../assets/back.png'
import './create.css'

const Create = () => {
  const [name, setName] = useState("")
  const [code, setCode] = useState(0)
  const [category, setCategory] = useState("")
  const [español, setEspañol] = useState("")
  const [ingles, setIngles] = useState("")

  const back = {
    backgroundImage: `url(${backimg})`,
  }
  
  const handleForm = () => {
    const check = document.getElementById("e")
    const box = document.getElementById("i")
    console.log(check, box)
    console.log(`Your name is ${name}, the code ${code}, in the category ${category}, with this languages ${español} ${ingles}`)
  }

  return (
    <div className='create-container'>
        <Link to="/" className='link-details'>
          <span role='back' style={back} className='details-back'></span>
        </Link>
      <div className='create-form'>
        <h2 className='create-title'>Nuevo Producto</h2>
        
        <span className='spaces'>Nombre:</span> <input onChange={(e) => setName(e.target.value)} type="text" name="" id="name" /><br/>
        <span className='spaces'>Código:</span> <input onChange={(e) => setCode(e.target.value)} type="number" name="" id="code" /><br/>
        <span className='spaces'>Categoría:</span> <input onChange={(e) => setCategory(e.target.value)} type="text" name="" id="category" /><br/>
        <p>Idiomas:</p> 
        
        <span className='space'>Español</span><input onChange={(e) => setEspañol(e.target.value)} role="es" type="checkbox" name="" id="e" value="español" />
        <span className='space'>Ingles</span><input onChange={(e) => setIngles(e.target.value)} role="en" type="checkbox" name="" id="i" value="ingles" /><br /> 
        <button onClick={handleForm} role="ac" type='submit' className='accept'>+ &nbsp;&nbsp;Aceptar</button>
      </div>
    </div>
  )
}

export default Create