import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import axios from 'axios';
import Swal from 'sweetalert2'

const FormularioProveedor= () => {
 
 const [inputs,setInput]= useState({
  nombre:"",
  apellido:"",
  empresa:"",
  cuit:"",
  pagos:"",
  envios:""
 })

 const handleChange =(e)=>{
  setInput({...inputs,[e.target.name]: e.target.value});
 };

 const handleClick = async()=>{
  await axios.post("https://final-react-back-production.up.railway.app/crearProveedor",inputs)
    setInput({
        nombre:"",
        apellido:"",
        empresa:"",
        cuit:"",
        pagos:"",
        envios:""
    })
    Swal.fire({
      icon: 'success',
      title: 'Proveedor Creado',
      button: "Ok",
      timer: 3000
    })
 };
 const handleUpdate = async()=>{
  await axios.post("https://final-react-back-production.up.railway.app/crearProveedor",inputs)
    setInput({
      nombre:"",
      apellido:"",
      empresa:"",
      cuit:"",
      pagos:"",
      envios:""
    })
    Swal.fire({
      icon: 'success',
      title: 'Proveedor Actualizado',
      button: "Ok",
      timer: 3000
    })
  };
  console.log(inputs);

  return (
    <>
      <NavBar />
      <div
        className="d-flex flex-column align-items-center pt-3"
        style={{height:"650px",backgroundColor:"gainsboro"}}>
        <h1>Proveedores</h1>
        <br />
        {Object.keys(inputs).map((key, index) => (
          <Form.Group key={index} style={{maxWidth:"200px"}}>
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
        <Button onClick={handleClick}variant="outline-primary">Enviar</Button><br/>
        <Button onClick={handleUpdate}variant="outline-secondary">Editar</Button>
      </div>
      <div className="text-center" style={{backgroundColor:"gainsboro",height:"50px"}}>
        <Button variant="outline-dark" href="/home">Volver</Button>
        
      </div>
      <Footer/>
    </>
  );
}

export default FormularioProveedor;