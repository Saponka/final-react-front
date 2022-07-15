
import React,{ useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

        const navigate = useNavigate()

        const [input,setInput] = useState({user:"",password:"",})
        //onchange dispara un evento que toma todo cambio en el input//handlechage lleva por parametro un evento
        const handleChange =(e)=>{
          setInput({...input,[e.target.name]: e.target.value});
        };
        //cada vez que se escriba algo en los input se va a diparar en ese target
        const handleClick =async(e)=>{
         e.preventDefault()
         await axios.post("http://localhost:3001/login",input)
         setInput({ user:"",password:"" })
         navigate('/home')
        }
         console.log(input);
    return (
       <div style={{height:"750px",backgroundColor:"gainsboro"}} className="d-flex flex-column align-items-center text-center pt-3 " >
         <div className=" login-form animate__animated animate__rotateIn animate__fast">
              <form action='' method="post">
                 <input type="text" name="user" id="user" placeholder="User" required onChange={handleChange} />
                 <input type="password" name="password" id="pass" placeholder="Password" required onChange={handleChange}/>
                 <input type="submit" className="btn btn-lg btn-outline-success mb-2" value="Login" style={{width:"260px"}}  onClick={handleClick} />
             </form>
             <a href="/register" className="btn btn-lg btn-outline-dark" style={{width:"260px"}}>Register</a>     
         </div>
      </div>  
    )
}
export default Login;