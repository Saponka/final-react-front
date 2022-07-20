import React from 'react'
import {Navbar,Nav, Container} from "react-bootstrap";
import image from "../../assets/image/bonsai-garden.svg"

const NavBar = () => {
 
  const dia =  diatoString();
  const fecha = new Date().getDate();
  const mes = month();
  const date = new Date().getFullYear();

  function diatoString() {
    const day =  new Date().getDay();
    switch (day) {
        case 1:
        return"Lunes"
    case 2:
        return"Martes"
    case 3: 
        return"Miercoles"
    case 4:
        return"Jueves"
    case 5:
        return "Viernes"
    case 6:
        return"Sábado"
    case 0:
        return "Domingo"
        default:
        break;
    }   
};
 function month() {
    const mes =  new Date().getMonth();
    switch (mes) {
    case 0:
        return"Enero"  
    case 1:
        return"Febrero"
    case 2:
        return"Marzo"
    case 3:
        return"Abril"
    case 4:
        return "Mayo"
    case 5:
        return"Junio"
    case 6:
        return "Julio"    
    case 7:
        return"Agosto"
    case 8:
        return"Septiembre"
    case 9:
        return"Octubre"
    case 10:
        return "Noviembre"
    case 11:
        return"Diciembre"
        default:
        break;
    }  
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
        {dia} {fecha} {mes} {date}
      </Navbar.Text>
      <Navbar.Text >
        <button className='btn  btn-sm btn-outline-secondary'> <a href='/'>Log Out</a></button>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default NavBar;