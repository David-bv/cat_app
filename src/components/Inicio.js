import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/inicio.css'

const Inicio = () => {
  return (
    <div className="fondoInicio">
        <p>Meow! Do you want to know me?</p>
        <img src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1653491721/pixlr-bg-result_10_gtty7c.png" alt=""></img>
        <div className="">
        <Link to="/IndexCat"><Button className="boton" variant="outline-info">CLICK HERE</Button></Link>
        </div>
    </div>
  )
}

export default Inicio