
import React,{ useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



const Login = () => {

        const navigate = useNavigate()

        const [input,setInput] = useState({email:"",password:"",})
        const handleChange =(e)=>{
          setInput({...input,[e.target.name]: e.target.value});
        };
        const handleClick =async(e)=>{
         e.preventDefault()
         await axios.post(process.env.REACT_APP_SERVER+"/login",input)
         Swal.fire({
          icon: 'success',
          title: 'Bienvenido '+ input.email,
          timer: 3000
         })
         setInput({email:"",password:"" })
         navigate('/home')
         
        }
        ///////////////////////////////////////////////////
       
    return (
      <div style={{height:"750px",backgroundColor:"gainsboro"}} className="d-flex flex-column align-items-center text-center pt-3 " >
      <div className=" login-form animate__animated animate__rotateIn animate__fast">
           <form action='' method="post" >
              <input type="email" name="email"id="email" placeholder="Email" required onChange={handleChange} />
              <input type="password" name="password" id="password" placeholder="Password" required onChange={handleChange}/>
              <input type="submit" className="btn btn-lg btn-outline-success mb-2" value="Login" style={{width:"250px"}}  onClick={handleClick} />
          </form>
          <a href="/register" className="btn btn-lg btn-outline-dark" style={{width:"250px"}} >Register</a>     
      </div>
   </div> 
    )
}
export default Login;
/*    */ 
