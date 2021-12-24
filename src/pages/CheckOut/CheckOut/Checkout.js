import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowBarRight } from 'react-icons/bs';
import Navigation from '../../Shared/Navigation/Navigation';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

const CheckOut = () => {
    return (
        <>
            <Navigation />
            <article
                style={{ background: "#373F50", height: "190px" }}>
                <aside className="d-flex align-items-center justify-content-around pt-5">
                    <h3
                        style={{ marginLeft: "50px", fontWeght: "bold", color: "#fff" }}
                    >
                        Checkout
                    </h3>
                    <h6 style={{ color: "white", marginRight: '80px' }}>Home <BsArrowBarRight className='fs-4' /> Checkout</h6>
                </aside>
            </article>
            <Container >
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={6}>
                        <CheckoutForm />
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={4}>
                        <CheckoutProduct />
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default CheckOut;