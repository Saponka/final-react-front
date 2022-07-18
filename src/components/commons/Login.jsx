
import React,{ useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
//import {Button, Form, Row,} from 'react-bootstrap'


const Login = () => {

        const navigate = useNavigate()

        const [input,setInput] = useState({user:"",password:"",})
        const handleChange =(e)=>{
          setInput({...input,[e.target.name]: e.target.value});
        };
        const handleClick =async(e)=>{
         e.preventDefault()
         await axios.post("http://localhost:3001/login",input)
         Swal.fire({
          icon: 'success',
          title: 'Bienvenido '+ input.user,
          timer: 3000
         })
         setInput({ user:"",password:"" })
         navigate('/home')
        }
        ///////////////////////////////////////////////////
       
    return (
      <div style={{height:"750px",backgroundColor:"gainsboro"}} className="d-flex flex-column align-items-center text-center pt-3 " >
      <div className=" login-form animate__animated animate__rotateIn animate__fast">
           <form action='' method="post" >
              <input type="text" name="user"id="user" placeholder="User" required onChange={handleChange} />
              <input type="password" name="password" id="pass" placeholder="Password" required onChange={handleChange}/>
              <input type="submit" className="btn btn-lg btn-outline-success mb-2" value="Login" style={{width:"260px"}}  onClick={handleClick} />
          </form>
          <a href="/register" className="btn btn-lg btn-outline-dark" style={{width:"260px"}}>Register</a>     
      </div>
   </div> 
    )
}
export default Login;
/*    */ 


      /*  <div style={{height:"750px",backgroundColor:"gainsboro"}} className="d-flex flex-column align-items-center text-center  " >
         <div className=" login-form animate__animated animate__rotateIn animate__fast">
      <Form method="post">
      <Row className="mb-3" >
        <Form.Group  controlId="validationCustom01">
           <Form.Label>User</Form.Label> 
          <Form.Control
            required
            type="text"
            name="user"
            placeholder="User"
            onChange={handleChange}
          />  
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="validationCustom02">
          
          <Form.Control
            required
            type="password"
            name="password" 
            placeholder="Password"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button onClick={handleClick} className="btn btn-lg ms-3 mb-2" variant="outline-success"style={{width:"250px"}} >Login</Button>
        <Button href="/register" className="btn btn-lg ms-3" variant="outline-dark" style={{width:"250px"}}>Register</Button>
        </Row>
        </Form>
      </div>
      </div> */