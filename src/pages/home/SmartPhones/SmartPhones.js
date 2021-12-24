import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import phoneBanner from '../../../images/mobileBanner.jpg';
import spinner from '../../../images/loader-image.gif';
import Phones from './Phones';
import Slider from "react-slick";
import slickSlider from '../../SlickSlider/SlickSlider';
import ShopProducts from '../../Hooks/ManageProducts';


const SmartPhones = () => {


    const { products } = ShopProducts();
    const { setting2 } = slickSlider();

    return (
        <Container>
            <Row>

                <Col md={6} lg={4} sm={12} xs={12}>
                    <img width="430" className='img-fluid' src={phoneBanner} alt="phoneBanner" />
                </Col>

                <Col xs={12} md={6} lg={8}>
                    {
                        products.length === 0 ?
                            <aside className='d-flex align-items-center justify-content-center '>
                                <img width="300" src={spinner} alt="" />
                            </aside>
                            :
                            <Slider {...setting2}>

                                {
                                    products.map(phone => phone.show === "phone" &&
                                        <Phones
                                            key={phone.name}
                                            phone={phone}
                                        />
                                    )
                                }
                            </Slider>
                    }
                </Col>

            </Row>
        </Container>
    );
};

export default SmartPhones;