import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import axios from 'axios';
import Swal from 'sweetalert2'

const FormularioProducto = () => {

 const [inputs,setInput]= useState({
  nombre:"",
  marca:"",
  stock:"",
  precio:"",
  codigo:""
 })

 const handleChange =(e)=>{
  setInput({...inputs,[e.target.name]: e.target.value});
 };

 const handleClick = async()=>{
  await axios.post("http://localhost:3001/crearProducto",inputs)
    setInput({
        nombre:"",
        marca:"",
        stock:"",
        precio:"",
        codigo:""
    })
    Swal.fire({
      icon: 'success',
      title: 'Producto Creado',
      button: "Ok",
      timer: 3000
    })
  };
  const handleUpdate = async()=>{
    await axios.post("http://localhost:3001/crearProducto",inputs)
      setInput({
          nombre:"",
          marca:"",
          stock:"",
          precio:"",
          codigo:""
      })
      Swal.fire({
        icon: 'success',
        title: 'Producto Actualizado',
        button: "Ok",
        timer: 3000
      })
    };
   
  console.log(inputs);
  return (
    <>
      <NavBar />
      <div className="d-flex flex-column align-items-center pt-3"
        style={{height:"580px",backgroundColor:"gainsboro"}}>
        <h1>Productos</h1>
        <br />
        {Object.keys(inputs).map((key, index) => (
          <Form.Group key={index} style={{ maxWidth: "200px" }}>
            <Form.Label className="d-flex justify-content-center">
              {key.toUpperCase()}
            </Form.Label>
            <Form.Control
              name={key}
              value={inputs[key]}
              onChange={handleChange}/>
          </Form.Group>
        ))}{" "}
        <br />
        <Button onClick={handleClick}variant="outline-primary">Crear</Button><br/>
        <Button onClick={handleUpdate}variant="outline-secondary">Editar</Button><br/>
      </div>
      <div
        className="text-center"
        style={{ backgroundColor:"gainsboro",height:"50px" }}>
        <Button variant="outline-dark" href="/home">Volver</Button>
      </div>
      <Footer/>
    </>
  );
}
export default FormularioProducto;