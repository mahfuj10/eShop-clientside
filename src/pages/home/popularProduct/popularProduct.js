import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PopularProduct = () => {

    const [ product, setProduct ] = useState([]);

useEffect( () => {
    fetch(`/PopularProduct.json`)
      .then(res => res.json())
      .then(data => setProduct(data))
} , [])


    return (
    
        <Container>
            <Row>
                
                <Col lg={4}>
                    
                </Col>

                <Col lg={4}>

                </Col>
                
                <Col lg={4}>

                </Col>
            
            </Row>
        </Container>
    );
};

export default PopularProduct;