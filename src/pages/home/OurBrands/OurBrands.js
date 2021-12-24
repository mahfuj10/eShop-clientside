import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const OurBrands = () => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('Brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <Container>
            <h4>Shop By Brand</h4>
            <Row>
                {
                    brands.map(brand => <Col lg={3} md={6} >

                        <aside
                            className=" mb-3"
                            style={{ width: "315px", display: "flex", justifyContent: "center", alignItems: "center", height: "110px", boxShadow: "-3px -3px 7px #ffffff ,3px 3px 5px #E2EAEF" }}
                        >
                            <img width="150" src={brand?.image} alt="" />
                        </aside>
                    </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default OurBrands;