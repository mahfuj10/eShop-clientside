import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import laptopBanner from '../../../images/laptopBanner.jpg';
import spinner from '../../../images/loader-image.gif';
import Laptop from '../Laptops/Laptop'
import Slider from "react-slick";
import ShopProducts from '../../Hooks/ManageProducts';
import slickSlider from '../../SlickSlider/SlickSlider';


const Laptops = () => {

    const { products } = ShopProducts();
    const { setting2 } = slickSlider();



    return (
        <Container>
            <Row>

                <Col md={6} lg={4} sm={12} xs={12} >
                    <img src={laptopBanner} className='img-fluid' alt="phoneBanner" />
                </Col>

                <Col xs={12} md={6} lg={8}>
                    {
                        products.length === 0 ?
                            <aside className='d-flex align-items-center justify-content-center '>
                                <img width="300" src={spinner} alt="" />
                            </aside>
                            :
                            <Slider {...setting2}>                        {
                                products.map(laptop => laptop.show === "laptop" &&
                                    <Laptop
                                        key={laptop.name}
                                        laptop={laptop}
                                    />
                                )
                            }
                            </Slider>
                    }
                </Col>

            </Row>
        </Container >
    );
};

export default Laptops;