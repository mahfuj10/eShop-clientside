import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GrView } from 'react-icons/gr';
import { IoCartOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import ShopProducts from '../../Hooks/ManageProducts';
import Navigation from '../../Shared/Navigation/Navigation';
import spinner from '../../../images/spinner.gif';

const LaptopsRoute = () => {


    const { products } = ShopProducts();

    const history = useHistory();
    const handaleSeeDetails = id => history.push(`/single-product/${id}`);

    return (
        <>
            {
                products.length === 0 ? <article className="d-flex justify-content-center">
                    <img src={spinner} width="300" alt="spinner" />
                </article>
                    :

                    <Row>
                        {
                            products.map(product => product.category === 'Laptop' &&
                                <Col lg={4}>
                                    <section
                                        style={{ height: "300px", marginBottom: "60px" }}
                                        className="d-flex gap-2 
                                    shadow-sm
                                    align-items-center homeAppliancesItem p-3 "
                                    >

                                        <article>
                                            <img
                                                onClick={() => handaleSeeDetails(product?._id)}
                                                className="mb-3" width="300"
                                                src={product?.image} alt="productimage"
                                            />


                                        </article>
                                        <article>


                                            <h6 onClick={() => handaleSeeDetails(product?._id)}
                                                className="mt-2 product-title">{product?.name}
                                            </h6>

                                            <Rating initialRating={product?.rating}
                                                style={{ fontSize: '13px', color: "#FFBA00" }}
                                                emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating> <span>{product?.reviews} Review</span>

                                            <h5 className='mt-2'>${product?.price}</h5>

                                            <aside className="d-flex align-items-center ">
                                                <button
                                                    className="py-1 gap-2 px-3 mt-1 cart-button"
                                                >
                                                    <IoCartOutline className="fs-5" />  Add To Cart
                                                </button>
                                                <span className="wishdom-btn mt-3 p-2">
                                                    <i className="far fa-heart fs-5"></i>
                                                </span>
                                            </aside>


                                        </article>


                                    </section>
                                </Col>
                            )
                        }
                    </Row>
            }
        </>
    );
};

export default LaptopsRoute;