import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Snowfall from 'react-snowfall'

import { AiOutlineArrowRight } from 'react-icons/ai';
import jacketBanner from '../../../../images/jacketBanner.jpg';
import SingleJacket from './SingleJacket';
import './Shop.css'
import spinner from '../../../../images/loader-image.gif';
import Slider from 'react-slick';
import ShopProducts from '../../../Hooks/ManageProducts';


const ShoopJacket = () => {

    const [modalShow, setModalShow] = React.useState(false)




    const { products } = ShopProducts();

    const settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            <Row>
                <Col md={6} sm={12} lg={4} xs={12} className='d-flex align-items-center' >

                    <article>
                        <aside
                            className="ps-4 pt-5 pb-5"
                            style={{
                                backgroundColor: "#E2EAEF", height: "200px", width: "430px",
                            }}>
                            <h3>Winter Season !</h3>
                            <h6 className="d-inline me-4">Shop Jacket</h6> <AiOutlineArrowRight />
                        </aside>
                        <img
                            className='img-fluid'
                            height="505"
                            src={jacketBanner}
                            alt="bannerimg" />


                    </article>
                </Col>

                <Col md={6} sm={12} lg={8} xs={12}>

                    {
                        products.length === 0 ?

                            <aside className='d-flex align-items-center justify-content-center '>
                                <img width="300" src={spinner} alt="" />
                            </aside>
                            :
                            <Slider {...settings} >
                                {
                                    products.map(jacket => jacket.show === "jacketBanner" &&
                                        <SingleJacket
                                            jacket={jacket}
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

export default ShoopJacket;