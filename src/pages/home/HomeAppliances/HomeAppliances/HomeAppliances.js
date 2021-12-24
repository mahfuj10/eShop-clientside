import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import offerBanner from '../../../../images/HomeAppliancesBanner4.jpg';
import spinner from '../../../../images/loader-image.gif';
import ShopProducts from '../../../Hooks/ManageProducts';
import slickSlider from '../../../SlickSlider/SlickSlider';
import HomeElectronics from './HomeElectronics';

const HomeAppliances = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [])

    const { settings } = slickSlider();
    const { products } = ShopProducts();

    return (

        <Container>



            <h4>Top Home Appliances</h4>

            <Row>
                <Col>
                    {
                        products.length === 0 ?
                            <aside className='d-flex align-items-center justify-content-center '>
                                <img width="300" src={spinner} alt="" />
                            </aside>
                            :
                            <Slider {...settings} >
                                {
                                    products.map(product => product.category === "Home Appliances" &&

                                        <HomeElectronics
                                            key={product.name}
                                            product={product}
                                        />
                                    )
                                }

                            </Slider>

                    }
                </Col>
            </Row>

            <img src={offerBanner} alt="" className="img-fluid" />
        </Container>
    );
};

export default HomeAppliances;