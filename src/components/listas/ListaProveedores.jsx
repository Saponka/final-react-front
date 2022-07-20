import React,{ useEffect, useState }  from 'react'
import {Button,Table } from 'react-bootstrap'
import NavBar from '../commons/NavBar'
import axios from 'axios'
import Swal from 'sweetalert2'

const ListaProveedores = () => {
 
  const [proveedores,setProveedor]= useState([])
  
  useEffect(()=>{
    const getProveedores = async()=>{
      const {data} = await axios.get('http://localhost:3001/proveedores')
      setProveedor(data.proveedor);
    }
    getProveedores();
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
       const {data} =  axios.delete("http://localhost:3001/eliminarProveedor/" + id);
       console.log(data);
       setProveedor(proveedores.filter(proveedor => proveedor._id !== id))
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
      <h1 className='text-center' style={{fontFamily:'Fredericka the Great'}}>Proveedores</h1>
        <Table  bordered hover style={{ backgroundColor: "gainsboro",fontFamily:"Original Surfer"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Empresa</th>
              <th>Cuit</th>
              <th>Pagos</th>
              <th>Envios</th>
              <th className='text-center'>Editar x CUIT</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((proveedor, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.apellido}</td>
                <td>{proveedor.empresa}</td>
                <td>{proveedor.cuit}</td>
                <td>{proveedor.pagos}</td>
                <td>{proveedor.envios}</td>
                <td className='text-center'>
                <Button  onClick={()=>handleDelete(proveedor._id)} variant="outline-danger">Eliminar</Button>{" "}
                <Button href='/formProveedores' variant="outline-secondary">Editar</Button><br/>  
                </td>
              </tr>
            ))}</tbody>
        </Table>
      </div>
   </>
  )
}

export default ListaProveedores