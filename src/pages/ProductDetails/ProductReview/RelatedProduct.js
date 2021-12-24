import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import slickSlider from '../../SlickSlider/SlickSlider';





// const settings = {
//     dots: false,
//     infinite: false,
//     slidesToShow: 4,
//     slidesToScroll: 1,

// };
const { settings } = slickSlider();

const RelatedProduct = ({ category }) => {

    const history = useHistory();

    // "category": "Home Appliances"
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-sierra-85288.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setRelatedProducts(data))
    }, [])

    const handleSeeDetails = (id) => {
        history.push(`/single-product/${id}`);
        window.scrollTo(0, 150)
    }

    return (

        <>

            <hr />


            <Container className='mt-5 pt-3'>
                <h3 className='mb-4s'>You may also like</h3>

                <Slider {...settings}>
                    {
                        relatedProducts.map(product => product?.category === category && <article
                            className="rounded  jacketContainer p-3" style={{ width: '250px' }}
                            onClick={() => handleSeeDetails(product._id)}
                        >
                            <img className="mb-3" width="250" src={product?.image} alt="" />
                            <small className="text-secondary ">{product?.category}</small>
                            <h6 className="mt-1">{product?.name?.slice(0, 70)} ...</h6>
                            <aside>
                                <span className="d-flex mt-1 align-items-center justify-content-between">
                                    <h5>${product?.price}</h5>
                                    <Rating initialRating={product?.rating}
                                        style={{
                                            marginRight: "30px",
                                            fontSize: '15px', color: "#FFBA00",
                                        }}
                                        emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>
                                </span>
                            </aside>


                        </article>)
                    }
                </Slider>

            </Container>
            <br /><br />
            <hr className='mt-5 mb-5' /> <br />
        </>
    );
};

export default RelatedProduct;