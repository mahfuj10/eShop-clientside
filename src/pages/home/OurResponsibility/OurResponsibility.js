import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsStarHalf } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { BsFillQuestionOctagonFill } from 'react-icons/bs';


const OurResponsibility = () => {
    // {
    //     "icon": FaWarehouse,
    //     "title": "global warehouse",
    //     "description": "Total 13 warehouse to all country"
    // },
    const services = [
        {
            "icon": BsStarHalf,
            "title": "quality and saving",
            "description": "Comprehensive quality control and affordable prices"
        },

        {
            "icon": FaShippingFast,
            "title": "fast shipping",
            "description": "Fast and convenient door to door delivery"
        },
        {
            "icon": MdSecurity,
            "title": "payment security",
            "description": "More than 3 different secure payment methods"
        },
        {
            "icon": BsFillQuestionOctagonFill,
            "title": "have questions",
            "description": "24/7 Customer Service- we are avilable to help you"
        }
    ]

    return (
        <section style={{ background: "#E8EDF1", padding: "80px" }}>
            <Container>
                <h4 className="mb-4">Why Shop With us ?</h4>
                <Row >

                    {
                        services.map(service => <Col xs={12} md={6} lg={3}>
                            <Card className="shadow-sm mb-4 mb-lg-0" style={{ width: '261px', height: "291px" }}>
                                <Card.Body className="mt-4">
                                    <h1
                                        style={{ textAlign: "center", fontSize: "55px" }}
                                    >
                                        <service.icon />
                                    </h1>

                                    <Card.Title
                                        style={{ fontSize: "17px", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}
                                    >{service?.title.toUpperCase()}</Card.Title>

                                    <Card.Text style={{ textAlign: "center", marginTop: "15px", fontWeight: "500", color: "" }}>
                                        {service?.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        )

                    }

                </Row>
            </Container>
        </section>
    );
};

export default OurResponsibility;