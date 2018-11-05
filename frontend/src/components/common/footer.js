import React from 'react';
import { Col, Container, Row } from 'mdbreact';
import '../../css/footer.css'

class FooterPage extends React.Component {
    render(){
        return(
        
                <Container fluid className="text-center text-md-left bg">
                    <Row className="text-center text-md-left mt-3 pb-3 lower">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">About Us</h6>
                            <p>
                            OTOPaholic was founded because we love to Thai’s handmade Product and 
                            would love  to help so they can have opportunity in not just Thailand 
                            but around the world so we decided to create this  website to archive that goal.
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p><a href="#!">North</a></p>
                            <p><a href="#!">Central</a></p>
                            <p><a href="#!">South</a></p>
                            <p><a href="#!">NorthEast</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Affiliate</a></p>
                            <p><a href="#!">Shipping Rates</a></p>
                            <p><a href="#!">Help</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>Chatuchak, BKK 10900, TH</p>
                            <p>info@gmail.com</p>
                            <p>+66 234 567 88</p>
                            <p>+66 234 567 89</p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright <a href="/"> OTOPaholic.com </a></p>
                        </Col>
                    </Row>
                </Container>

        );
    }
}

export default FooterPage;
