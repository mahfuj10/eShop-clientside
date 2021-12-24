import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import tvBanner from '../../../../images/tv banner.jpg';
import spinner from '../../../../images/loader-image.gif';
import Television from '../Television/Television';
import '../../../home/style/style.css';
import slickSlider from '../../../SlickSlider/SlickSlider';
import Slider from 'react-slick';
import ShopProducts from '../../../Hooks/ManageProducts';


const Televisions = () => {

    const { products } = ShopProducts();

    const { settings } = slickSlider();

    return (

        <Container>

            <h3>Best Television</h3>
            {products.length === 0 ?
                <aside className='d-flex align-items-center justify-content-center '>
                    <img width="300" src={spinner} alt="" />
                </aside>
                :
                <Slider {...settings} >
                    {
                        products.map(television => television.category === "tv" &&
                            <Television
                                key={television.name}
                                television={television}
                            />
                        )
                    }
                </Slider>}
            <img src={tvBanner} className="img-fluid mt-4" alt="tvbanner" />

        </Container >
    );
};

export default Televisions;