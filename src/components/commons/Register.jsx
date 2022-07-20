import React,{useState}from 'react'
import { Button, Form } from 'react-bootstrap';
import '../style.css';
import axios from 'axios';
import Swal from 'sweetalert2'

const Register = () => {

    const [input,setInput] = useState({
      user:"",
      email:"",
      password:""
      })

      const handleChange =(e)=>{
        setInput({...input,[e.target.name]: e.target.value});
      };

    const handleClick =  async()=>{
     await axios.post("http://localhost:3001/registro",input)
      setInput({
      user:"",
      email:"",
      password:"",
     });
     
    Swal.fire({
      icon: 'success',
      title: 'Usuario Creado',
      showConfirmButton: true,
      confirmButtonText: 'Ok!',
      timer: 3000
     })
 }
 console.log(input);

return (
  <div style={{height:"750px",background:"gainsboro"}}className="d-flex flex-column align-items-center text-center pt-3 ">
    <div className="d-flex flex-column align-items-center pt-3 mb-5 register-form animate__animated animate__backInDown  animate__fast ">
      <h1>Form Register</h1>
      <Form className="d-flex flex-column ">
        {Object.keys(input).map((key, index) => (
          <Form.Group key={index} style={{width:"350px"}}>
            <Form.Label className="d-flex"> {key.toUpperCase()}</Form.Label>
            <Form.Control
              name={key}
              value={input[key]} 
              onChange={handleChange}
              placeholder={`Ingrese su ${key}`}
              type={input === "password" ? (key.type = "password") : key}/>
          </Form.Group>
        ))}
        <br />
        <div className="d-flex">
          <Button
            variant="outline-primary"
            size="lg"
            className="me-2 animate__animated animate__backInDown"
            style={{width:"50%"}}
            onClick={handleClick}>Save</Button>
          <br />
          <Button
            variant="outline-secondary"
            size="lg"
            className="animate__animated animate__backInDown"
            href="/"
            style={{width:"50%"}}>Volver</Button>
        </div>
      </Form>
    </div>
  </div>
);
}

export default Register