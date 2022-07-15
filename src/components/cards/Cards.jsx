import React from 'react'
import Card from './Card'

import imagen1 from '../../assets/image/sunrise.png'
import imagen2 from '../../assets/image/circles-green.png'
import imagen3 from '../../assets/image/atom.png' 
import imagen4 from '../../assets/image/atom.png'


const cards = [
    {
      id:1,
      title:'Productos',
      image:imagen1,
      url: '/listaProductos',
      url2:'/formProductos'
    },
    {
      id:2,
      title:'Proveedores',
      image:imagen2,
      url:'/listaProveedores',
      url2:'/formProveedores'
    },
    {
      id:3,
      title:'Clientes',
      image:imagen3,
      url:'/listaClientes',
      url2:'/formClientes'
    },
    {
      id:4,
      title:'Empleados',
      image:imagen4,
      url:'/listaEmpleados',
      url2:'/formEmpleados'
    }
  ]
const Cards = () => {
    console.log(cards);
  return (
    <div className=' mb-2 '>
    <div className='controles  '>
      {cards.map(card => (
        <div className='col-md-4  mt-3 mx-auto' key={card.id}>
          <Card title={card.title} image={card.image} url={card.url} url2={card.url2}></Card>
        </div>))}
    </div>
  </div>
  )
}

export default Cards
