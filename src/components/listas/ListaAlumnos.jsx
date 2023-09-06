import React,{ useEffect, useState } from 'react';
import {Button,Table} from 'react-bootstrap';
import NavBar from '../commons/NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';

const ListaAlumnos = () => {

    const [alumnos,setAlumnos]= useState([])
    
    useEffect(()=>{
     const getAlumnos = async()=>{
        const {data} = await axios.get('http://localhost:3001/alumnos')
        setAlumnos(data.alumno);
       console.log(data.alumno);
        }
        getAlumnos();
    },[]);
    
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
          const {data} =  axios.delete("http://localhost:3001/eliminarAlumno/" + id);
          console.log(data);
          setAlumnos(alumnos.filter(alumno => alumno._id !== id))
          Swal.fire(
            'Borrado!',
            'Alumno Eliminado con Exito.',
            'success'
          );
        } 
      });      
    };
  return (
    <>
    <NavBar />
        <div>
           <h1 className='text-center' style={{fontFamily:'Fredericka the Great'}}>Alumnos</h1>
           <Table  bordered hover style={{ backgroundColor: "gainsboro",fontFamily:'Original Surfer',color:"black" }}>
            <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dni</th>
              <th>Cuit</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Curso</th>
              <th>Año</th>
              <th>Promedio</th>
              <th>Descripcion</th>
              <th className='text-center'>Editar x DNI</th>
            </tr>
          </thead>
          <tbody >
            {alumnos.map((alumno, index) => (
              <tr key={index}>
                <td >{index + 1}</td>
                <td >{alumno.nombre}</td>
                <td >{alumno.apellido}</td>
                <td >{alumno.dni}</td>
                <td >{alumno.cuit}</td>
                <td >{alumno.direccion}</td>
                <td >{alumno.telefono}</td>
                <td >{alumno.curso}</td>
                <td>{alumno.año}</td>
                <td>{alumno.promedio}</td>
                <td >{alumno.descripcion}</td>
                <td className='text-center'>
                  <Button  onClick={()=>handleDelete(alumno._id)}variant="outline-danger">Eliminar</Button>{" "}
                  <Button href='/formAlumnos'variant="outline-secondary">Editar</Button>
                </td>
              </tr>
            ))}</tbody>
        </Table>
        <Button variant="outline-dark" href="/home">Volver</Button>
      </div>
      
    </>
  )
};

export default ListaAlumnos;
