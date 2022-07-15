import React from 'react'
import '../style.css'

const Card = ({title,image,url,url2}) => {
  return (
    <div className=' card text-center bg-dark  animate__animated animate__zoomInDown '>
      <div className='overflow'>
      <img src={image} alt='img' className='card-img-top'/>
      </div>
      <div className='card-body text-secondary'>
        <h4 className='card-title '>{title}</h4>
        <p className='card-text '>Bienvenidos al control de datos de {title}; En el podra Cargar, Actualizar,Borrar y hasta Buscar sus {title} desde la Base de Datos del Sistema.</p>
        <a href={url2} className='btn btn-outline-light' target="blank" >Cargar {title}</a><br/><br/>
        <a href={url} className='btn btn-outline-light' target="blank" >Lista de {title}</a>
      </div>
    </div>
  )
}

export default Card
