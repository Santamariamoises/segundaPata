import React, { Component } from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import { SocialIcon } from 'react-social-icons';


class FooterPage extends React.Component {
    render() {
        return (
            <Footer
                color="unique-color-dark"
                className="page-footer font-small pt-0"
            >
                <div style={{ backgroundColor: "#9B7777" }}>
                    <Container>
                        <Row className="py-4 d-flex align-items-center">
                            <Col
                                md="6"
                                lg="5"
                                className="text-md-left mb-4 mb-md-0"
                            >
                                <h4>
                                    Conectate en nuestras redes sociales!
                                </h4>
                            </Col>
                            <Col
                                md="4"
                                lg="5"
                                className="text-md-right"
                            >
                                <SocialIcon
                                    network="twitter"
                                    color="#00aced"
                                    url="https://twitter.com/?lang=en"
                                />
                                <SocialIcon
                                    network="facebook"
                                    color="#3b5998"
                                    url="https://facebook.com"
                                />

                                <SocialIcon
                                    network="instagram"
                                    color="#bc2a8d"
                                    url="https://www.instagram.com/"
                                />

                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left footer-2">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h2 className="text-uppercase font-weight-bold">
                                <strong>SEGUNDA PATA</strong>
                            </h2>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p className="footerText">
                                Nuestra mision es conectar a todos las personas que tienen un
                                interes por vender, comprar, e intercambiar productos de tus mascotas.
                            </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h2 className="text-uppercase font-weight-bold">
                                <strong>Conectate con nosotros!</strong>
                            </h2>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p className="footerText">Mexico City, Mexico</p>
                            <p className="footerText">
                                {" "}
                                segundaPata@mambo5.com
                            </p>
                            <p className="footerText"> + 52 55 8686 3708</p>
                            <p className="footerText"> + 52 55 8675 7654</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://github.com/CodersMostWanted/segunda-pata">
                            {" "}
                            Mambo5{" "}
                        </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
