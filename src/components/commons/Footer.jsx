import React from "react";
import { Container,Row,Col } from "react-bootstrap";


const Footer = ()=>{
    const date = new Date().getFullYear();
    const links=[
        {
          id:1,url:"/home",className:"bi bi-house fs-1"
        },
        {
          id:2,url:"https://github.com/Saponka",className:"bi bi-github fs-1"
        }
    ];

    return(
        <Container fluid  className="px-4 px-lg-5" style={{height:"130px",background:"linear-gradient(to bottom, #bdc3c7, #2c3e50)"}}>
         <Row>
              {links.map((link,index)=>(
                 <Col className="d-flex text-center align-items-center" style={{height:"85px"}} key={index}>
                 <a className="mx-auto" href={link.url} style={{textDecoration:"none",color:"white"}}> <i className={link.className}> </i></a> 
                  </Col>
                ))}
         </Row>
         <p className="text-muted small mt-4 text-center"> Copyright © F_3-H_R {date}</p>
        </Container>
    )   
};
export default Footer;