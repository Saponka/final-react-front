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
              height: "100px",
              background: "linear-gradient(to bottom, #304352, #d7d2cc)",
              borderBottom: "1px solid black",
            }}>
            <h1 className="text-center my-5  animate__animated animate__flip" style={{ fontFamily:"Audiowide"}}>
              StokSystem{" "}
            </h1>
          </Row>{" "}
           <Row>
            <Col className="text-center pt-4"
              style={{ backgroundColor: "azure", border: " 1px solid black" }}
              lg={12}>
              <h1 className="animate__animated  animate__zoomIn" style={{color:"black"}}>{" "}
                Control de Datos
              </h1>
              <br />
              <Cards />
              <br />
            </Col>
          </Row>
          {/*  <Row >
          <Col style={{ backgroundColor: "dimgray", border:" 1px solid black" }} lg={4} md={6} className="text-center  pt-4">
            <h1>Control de Ventas</h1><br/>
            <Button variant="outline-dark" size="lg" className="  animate__animated  animate__tada ">Ventas</Button><br/><br/>
          </Col>
          <Col style={{ backgroundColor: "white", border:" 1px solid black" }}><p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis eius consectetur delectus iste suscipit quisquam quaerat, alias temporibus at libero porro voluptatibus vero! Consequatur nostrum autem nesciunt nemo mollitia?</p></Col>
        </Row> */}
        </Container>
      </div>
      <Footer/>
    </>
  );
}

export default Home