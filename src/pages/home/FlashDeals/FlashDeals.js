import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import ShopProducts from '../../Hooks/ManageProducts';
import slickSlider from '../../SlickSlider/SlickSlider';
import FlashItem from './FlashItem';
import spinner from '../../../images/loader-image.gif';

const FlashDeals = () => {



    // const [flashDeals, setFlashDeals] = useState([]);
    const [flashTime, setFlashTime] = useState({});


    const countTime = () => {
        const countDate = new Date("December, 2021");
        const now = new Date().getTime();
        const gap = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        const flashSellTime = { textDay, textHour, textMinute, textSecond };
        setFlashTime(flashSellTime)
    }

    const timeStyle = {
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    // setInterval(() => {
    //     countTime()
    // }, 1000)

    const { products } = ShopProducts();





    const { settings } = slickSlider();

    return (

        <Container >

            <article className="d-flex align-items-center gap-4">

                <h3>Flash Deals</h3>

                <aside className="d-flex gap-2">

                    <h5 style={timeStyle}>  {flashTime.textDay}</h5> :
                    <h5 style={timeStyle}> {flashTime.textHour} </h5> :
                    <h5 style={timeStyle}> {flashTime.textMinute} </h5> :
                    <h5 style={timeStyle}> {flashTime.textSecond} </h5>


                </aside>
            </article>
            {products.length === 0 ?
                <aside className='d-flex align-items-center justify-content-center '>
                    <img width="300" src={spinner} alt="" />
                </aside>
                :
                <Slider {...settings}>

                    {
                        products.map(product => product.flashDeal === "true" && < FlashItem
                            product={product}
                            key={product._id}
                        />)
                    }

                </Slider>
            }
        </Container>
    );
};

export default FlashDeals;