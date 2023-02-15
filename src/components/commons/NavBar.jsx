import React from 'react';
import {Navbar,Nav, Container} from "react-bootstrap";
import image from "../../assets/image/bonsai-garden.svg";

const NavBar = () => {
    const fecha = new Date().getDate();
    const date = new Date().getFullYear();
    //dias
    const dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];

    function diasEnString() {
       const day =  new Date().getDay();
         return  dias[day] 
    };
   //meses
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
 
    function month() {
       const mes =  new Date().getMonth();
         return meses[mes]
     };

   return (
    <Navbar variant="dark" expand='lg' style={{fontFamily:"Audiowide",background: "linear-gradient(to bottom, #000000, #434343)"}} >
     <Container>
       <Navbar.Brand href="/home"><img style={{width:"150px",height:"100px"}} alt="bonsai" src={image} /></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse className="justify-content-end"  id="basic-navbar-nav">
             <Nav className="me-auto nav nav-tabs">
                 <Nav.Link href="/listaProductos">Productos</Nav.Link>
                 <Nav.Link href="/listaProveedores">Proveedores</Nav.Link>
                 <Nav.Link href="/listaClientes">Clientes</Nav.Link>
                 <Nav.Link href="/listaEmpleados">Empleados</Nav.Link>
             </Nav>
          <Navbar.Text className="me-5">
              {diasEnString()} {fecha} {month()} {date}
          </Navbar.Text>
          <Navbar.Text >
             <button className='btn  btn-sm btn-outline-secondary'> <a href='/'>Log Out</a></button>
          </Navbar.Text>
       </Navbar.Collapse>
     </Container>
  </Navbar>
  )
};
export default NavBar;