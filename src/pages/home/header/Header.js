import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../../src/images/header/image-1.jpg.webp'
import img2 from '../../../../src/images/header/image-2.jpg.webp'
import img3 from '../../../../src/images/header/image-3.jpg.webp'
import img4 from '../../../../src/images/header/image-4.jpg.webp'
// import img5 from '../../../../src/images/header/image-5.jpg.webp'
import './Header.css';
// import img6 from '../../../../src/images/header/image6.jpg'
// import img7 from '../../../../src/images/header/image7.jpg'
import img10 from '../../../../src/images/header/image10.jpg'

const Header = () => {

    return (

        <Container className="mt-5">
            <Row className="pt-4 ">
                <Col lg={6} xs={12}>
                    <img className="img-fluid" src={img10} alt="" />
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={6} xs={6}>
                            <img className="img-fluid" src={img10} alt="" />
                        </Col>
                        <Col lg={6} xs={6}>
                            <img src={img10} className="img-fluid" alt="" />
                        </Col>
                        <Col lg={6} xs={6}>
                            <img src={img10} className="img-fluid mt-3" alt="" />
                        </Col>
                        <Col lg={6} xs={6}>
                            <img src={img10} className="img-fluid mt-3" alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;