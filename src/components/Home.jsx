import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./commons/NavBar";
import Footer from "./commons/Footer";
import Cards from "../components/cards/Cards";
import './style.css';


const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <Container fluid>
          <Row className="d-grid align-content-center"
            style={{
              background: "linear-gradient(to bottom, #304352, #d7d2cc)",
              borderBottom: "1px solid black",
            }}>
            <h1 className="text-center my-5 mb-5 animate__animated animate__slideInRight" style={{ fontFamily:"Audiowide",fontSize:"80px"}}>
              Bonzai ZenTek
            </h1>
          </Row>
           <Row>
            <Col className="text-center pt-4"
              style={{ backgroundColor: "azure", border: " 1px solid black" }}
              lg={12}>
              <h1 className="animate__animated  animate__zoomIn" style={{color:"black",fontFamily:"Original Surfer"}}>{" "}
                Control de Datos
              </h1>
              <br />
              <Cards />
              <br />
            </Col>
          </Row>
            <Row >
          <Col style={{ backgroundColor: "white", border:" 1px solid black" }}><p className="p-5">Cada Tarjeta tiene su forma de editar sus datos.<b> PRODUCTOS:</b> Se Actualiza Buscando por numero de Codigo;<b> PROVEEDORES:</b> Se Actualiza Buscando por numero de CUIT; <b>CLIENTES:</b> Se Actualiza Buscando por numero de DNI;<b> EMPLEADOS:</b> Se Actualiza Buscando por numero de DNI. </p></Col>
        </Row> 
        </Container>
      </div>
      <Footer/>
    </>
  );
}

export default Home;