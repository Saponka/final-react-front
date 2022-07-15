import React,{ useEffect, useState } from 'react'
import {Button,Table} from 'react-bootstrap'
import NavBar from '../commons/NavBar'
import Footer from '../commons/Footer'
import axios from 'axios'
import Swal from 'sweetalert2'

const ListaClientes = () => {

    const [clientes,setClientes]= useState([])
    
    useEffect(()=>{
     const getClientes = async()=>{
        const {data} = await axios.get('http://localhost:3001/clientes')
        setClientes(data.cliente);
       console.log(data.cliente);
        }
         getClientes();
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
          const {data} =  axios.delete("http://localhost:3001/eliminarCliente/" + id);
          console.log(data);
          Swal.fire(
            'Borrado!',
            'Archivo Eliminado con Exito.',
            'success'
          )
        }
      }) 
      setClientes(clientes.filter(cliente => cliente._id !== id))
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
              <th>Apellido</th>
              <th>Dni</th>
              <th>Producto</th>
              <th>Descripcion</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {clientes.map((cliente, index) => (
              <tr key={index}>
                <td  >{index + 1}</td>
                <td >{cliente.nombre}</td>
                <td >{cliente.apellido}</td>
                <td >{cliente.dni}</td>
                <td >{cliente.producto}</td>
                <td >{cliente.descripcion}</td>
                <td className='text-center'>
                  <Button  onClick={()=>handleDelete(cliente._id)}>Eliminar</Button>{" "}
                  <Button href='/formClientes'>Editar</Button>
                </td>
              </tr>
            ))}</tbody>
        </Table>
      </div>
      <Footer/>
    </>    
  )
}

export default ListaClientes