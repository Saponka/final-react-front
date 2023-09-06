import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import axios from 'axios';
import Swal from 'sweetalert2'

const FormularioClientes= () => {
  
 const [inputs,setInput]= useState({
    nombre:"",
    apellido:"",
    dni:"",
    producto:"",
    descripcion:""
 })

 const handleChange =(e)=>{
  setInput({...inputs,[e.target.name]: e.target.value});
 };

 const handleClick = async()=>{
  await axios.post("http://localhost:3001/crearCliente",inputs)
    setInput({
        nombre:"",
        apellido:"",
        dni:"",
        producto:"",
        descripcion:""
    })
    Swal.fire({
      icon: 'success',
      title: 'Cliente Creado',
      button: "Ok",
      timer: 3000
    })
 };
  const handleUpdate = async()=>{
  await axios.post("http://localhost:3001/crearCliente",inputs)
    setInput({
        nombre:"",
        apellido:"",
        dni:"",
        producto:"",
        descripcion:""
    })
    Swal.fire({
      icon: 'success',
      title: 'Cliente Actualizado',
      button: "Ok",
      timer: 3000
    })
 }; 
  console.log(inputs);

  return (
    <>
      <NavBar />
      <div className="d-flex flex-column align-items-center pt-3"
        style={{ height:"580px", backgroundColor:"gainsboro"}}>
        <h1>Clientes</h1>
        <br />
        {Object.keys(inputs).map((key, index) => (
          <Form.Group key={index} style={{ maxWidth:"200px"}}>
            <Form.Label className="d-flex justify-content-center">
              {key.toUpperCase()}
            </Form.Label>
            <Form.Control
              name={key}
              value={inputs[key]}
              onChange={handleChange}/>
          </Form.Group>
        ))}{" "}
      
      </div>
      <div className='text-center'>
        <div>
        <Button style={{width:"150px"}} onClick={handleClick}variant="outline-primary">Enviar</Button>
        </div>
        <br />
        <div>
        <Button style={{width:"150px"}} onClick={handleUpdate}variant="outline-secondary">Editar</Button>
        </div>
      </div>
      <br />
      <div className="text-center"style={{backgroundColor:"gainsboro",height:"50px"}}>
        <Button variant="outline-dark" href="/home">Volver</Button>
      </div>
      <Footer/>
    </>
  );
}

export default FormularioClientes;