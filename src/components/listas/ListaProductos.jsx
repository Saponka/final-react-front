import React,{ useEffect, useState } from 'react'
import {Button,Table} from 'react-bootstrap'
import NavBar from '../commons/NavBar'
import axios from 'axios'
import Swal from 'sweetalert2'

const ListaProductos = () => {

    const [productos,setProductos]= useState([])
    
    useEffect(()=>{
     const getProductos = async()=>{
        const {data} = await axios.get('http://localhost:3001/productos')
        setProductos(data.producto);
       console.log(data.producto);
    }
     getProductos();
    },[])
    
    const handleDelete = (id)=>{
       Swal.fire({
        title: 'Eliminar?',
        text: "Estas Seguro de Eliminar el Archivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          const {data} =  axios.delete("http://localhost:3001/eliminar/" + id);
          console.log(data);
          setProductos(productos.filter(producto => producto._id !== id))
          Swal.fire(
            'Borrado!',
            'Archivo Eliminado con Exito.',
            'success'
          )
        }
      })     
    }
    
  
    return (
    <>
      <NavBar />
      <div>
            <h1 className='text-center'>Productos</h1>
        <Table bordered hover style={{ backgroundColor: "gainsboro" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Stock</th>
              <th>Codigo</th>
              <th>Editar x Codigo</th>
            </tr>
          </thead>
          <tbody >
            {productos.map((producto, index) => (
              <tr key={index}>
                <td  >{index + 1}</td>
                <td >{producto.nombre}</td>
                <td >{producto.marca}</td>
                <td >{producto.stock}</td>
                <td >{producto.codigo}</td>
                <td className='text-center'>
                  <Button onClick={()=>handleDelete(producto._id)} variant="outline-danger">Eliminar</Button>{" "}
                  <Button href='/formProductos' variant="outline-secondary">Editar</Button>
                </td>
              </tr>
            ))}</tbody>
        </Table>
      </div>
    </>     
  )
}

export default ListaProductos