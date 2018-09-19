import React, { Component } from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import { SocialIcon } from 'react-social-icons';
const footer = () => (

   <Footer className="page-footer font-small pt-0">
   <div>
   	<Container>
   	<Row className="py-4 d-flex align-items-center">
   	<Col md="6" lg="7" className="text-md-left mb-4 mb-md-0">
   	<h4>Conectate con nosotros en nuestras redes sociales!</h4>
   	</Col>
   	<Col md="6" lg="7" className="text-center text-md-right">
   	<SocialIcon network="facebook" color="#3b5998" url="https://facebook.com" />
   	<SocialIcon network="twitter" color="#00aced" url="https://twitter.com/?lang=en"/>
   	</Col>
   	</Row>
   	</Container>
		</div>
		<Container className="mt-5 mb-4 text-center text-md-left footer-2">
		<Row className="mt-3">
		<Col md="3" lg="4" xl="3" className="mb-4">
		<h4 className="text-uppercase font-weight-bold">
		<strong>Segunda Pata</strong>
		</h4>
		<hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }}/>
     <p className="footerText">
        Nuestra mision es connectarte con otros amantes de las mascotas a si como tu
        para poder intercambiar, comprar y vender los mejores accesorios, juguetes 
        y productos para tu mascota en general!                         
      </p>
		</Col>
		<Col md="2" lg="2" xl="2" className="mb-4">
     <h6 className="text-uppercase font-weight-bold">
      <strong>Products We Used</strong>
        </h6>
      <hr
        className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style={{ width: "60px" }} />
            <p>
              <a href="https://reactjs.org/">REACT</a>
                 </p>
            <p>
              <a href="https://reacttraining.com/react-router/">
                React-Router-Dom
              </a>
            </p>
            <p>
              <a href="https://mdbootstrap.com/react/">
                MDBReact
              </a>
            </p>
            <p>
             <a href="https://react-bootstrap.github.io/">
                React-Bootstrap
             </a>
            </p>
      </Col>
		</Row>
		</Container>
     </Footer>
 
);

export default footer;
