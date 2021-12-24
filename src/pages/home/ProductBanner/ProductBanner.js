import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import productBanner1 from '../../../images/productBanner1.jpg'
import productBanner2 from '../../../images/productBanner2.jpg'
import productBanner3 from '../../../images/productBanner3.jpg'
import productBanner4 from '../../../images/productBanner4.jpg'
import productBanner5 from '../../../images/productBanner5.jpg'

const ProductBanner = () => {
    return (
        <Container>
            <Row >

                <Col md={6}>
                    <img style={{ marginLeft: '255px' }} src={productBanner1} alt="phonebannerimage" />
                </Col>

                <Col md={6}>
                    <Row >
                        <Col md={6}>
                            <img className="img-fluid" src={productBanner2} alt="productbannerimage" />
                        </Col>
                        <Col md={6}>
                            <img className="img-fluid" src={productBanner3} alt="productbannerimage" />
                        </Col>
                        <Col md={6}>
                            <img className="img-fluid" src={productBanner4} alt="productbannerimage" />
                        </Col>
                        <Col md={6}>
                            <img className="img-fluid" src={productBanner5} alt="productbannerimage" />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default ProductBanner;