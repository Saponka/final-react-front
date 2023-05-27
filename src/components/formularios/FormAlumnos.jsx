import React, { useState } from 'react';
import Footer from '../commons/Footer';
import NavBar from '../commons/NavBar';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormAlumnos = () => {

    const [inputs,setInput]= useState({
        nombre:"",
        apellido:"",
        dni:"",
        cuit:"",
        direccion:"",
        telefono:"",
        curso:"",
        año:"",
        promedio:"",
        descripcion:""
       });

    const handleChange =(e)=>{
        setInput({...inputs,[e.target.name]: e.target.value});
       };
      
    const handleClick = async()=>{
        await axios.post("https://final-react-back-production.up.railway.app/crearAlumno",inputs)
          setInput({ nombre:"",apellido:"",dni:"",cuit:"",direccion:"",telefono:"",
          curso:"",
          año:"",
          promedio:"",
          descripcion:""});
          Swal.fire({
            icon: 'success',
            title: 'Alumno Creado',
            button: "Ok",
            timer: 3000
          });
       };
       console.log(inputs);
      
    const handleUpdate = async()=>{
        await axios.post("https://final-react-back-production.up.railway.app/crearAlumno",inputs)
          
        setInput({ nombre:"",apellido:"",dni:"",cuit:"",direccion:"",telefono:"",
          curso:"",
          año:"",
          promedio:"",
          descripcion:""});

          Swal.fire({
            icon: 'success',
            title: 'Alumno Actualizado',
            button: "Ok",
            timer: 3000
          });
       };



  return (
    <div>
       <NavBar />
      <div className="d-flex flex-column align-items-center pt-3 "
        style={{ height:"790px",backgroundColor:"gainsboro"}}>
        <h1>Alumnos</h1>
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
        <Button onClick={handleClick}variant="outline-primary">Enviar</Button><br/>
        <Button onClick={handleUpdate}variant="outline-secondary">Editar</Button>
      </div>
      <div className="text-center" style={{backgroundColor:"gainsboro",height:"50px"}}>
        <Button variant="outline-dark" href="/home">Volver</Button>
      </div>
      <Footer/>
    </div>
  )
}

export default FormAlumnos;
