import React,{ useEffect, useState } from 'react'
import {Button,Table} from 'react-bootstrap'
import NavBar from '../commons/NavBar'
import Footer from '../commons/Footer'
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
          Swal.fire(
            'Borrado!',
            'Archivo Eliminado con Exito.',
            'success'
          )
        }
      }) 
     setProductos(productos.filter(producto => producto._id !== id))
    }
    
  
    return (
    <>
      <NavBar />
      <div style={{height:"600px"}}>
        <Table striped bordered hover style={{ backgroundColor: "gainsboro" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Stock</th>
              <th>Codigo</th>
              <th></th>
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
                  <Button  onClick={()=>handleDelete(producto._id)}>Eliminar</Button>{" "}
                  <Button href='/formProductos'>Editar</Button>
                </td>
              </tr>
            ))}</tbody>
        </Table>
      </div>
      <Footer/>
    </>     
  )
}

export default ListaProductos