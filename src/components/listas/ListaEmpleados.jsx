import React,{ useEffect, useState }  from 'react'
import {Button,Table} from 'react-bootstrap'
import NavBar from '../commons/NavBar'
import axios from 'axios'
import Swal from 'sweetalert2'

const ListaEmpleados = () => {

  const [empleados,setEmpleado]= useState([])
  
  useEffect(()=>{
    const getEmpleados = async()=>{
      const {data} = await axios.get('http://localhost:3001/empleados')
      setEmpleado(data.empleado);
    }
    getEmpleados();
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
       const {data} =  axios.delete("http://localhost:3001/eliminarEmpleado/" + id);
       console.log(data);
       setEmpleado(empleados.filter(empleado => empleado._id !== id))
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
      <h1 className='text-center'>Empleados</h1>
        <Table bordered hover style={{ backgroundColor: "gainsboro" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dni</th>
              <th>Cuit</th>
              <th>Cargo</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Descripcion</th>
              <th>Editar x DNI</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.dni}</td>
                <td>{empleado.cuit}</td>
                <td>{empleado.cargo}</td>
                <td>{empleado.direccion}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.descripcion}</td>
                <td className='text-center'>
                  <Button  onClick={()=>handleDelete(empleado._id)}variant="outline-danger">Eliminar</Button>{" "}
                  <Button href='/formEmpleados'variant="outline-secondary">Editar</Button>
                </td>
              </tr>
            ))}</tbody>
        </Table>
      </div>
    </>
  )
}

export default ListaEmpleados