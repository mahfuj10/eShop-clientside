import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import CartProduct from './CartProduct';
import Navigation from '../../pages/Shared/Navigation/Navigation';
import OrderSummary from './OrderSummary/OrderSummary';
import UseAuth from '../Hooks/UseAuth';
import spinner from '../../images/spinner.gif';
import emptyCart from '../../images/empty-cart.gif';
import { Link } from 'react-router-dom';
import AddToCart from '../Hooks/AddToCart';

const MyCart = () => {

    // const [cartProducts, setCartProducts] = useState([]);
    const { user } = UseAuth();

    const { cartroducts, loading } = AddToCart();

    return (
        <>
            {/* <Spinner animation="border" /> */}
            {loading ? <aside className='d-flex justify-content-center'>
                <img src={spinner} width="350" alt="spinnergif" />
            </aside> :
                <Container style={{ marginTop: "100px", marginBottom: '100px' }}>



                    {
                        cartroducts.length === 0 ?
                            <article style={{ height: '50vh', width: '100%' }}>

                                <aside className='d-flex justify-content-center'>
                                    <img src={emptyCart} alt="emtycartgif" />
                                </aside>
                                <aside className='d-grid justify-content-center mt-4'>
                                    <h6 className='text-center text-secondary '>Your cart is empty</h6>
                                    <Link to="">
                                        <button className='border-1'>GO TO SHOP</button>
                                    </Link>
                                </aside>

                            </article>

                            :
                            <Row >



                                <Col lg={8}>
                                    {
                                        cartroducts.map(product => <CartProduct

                                            key={product._id}
                                            product={product} />
                                        )
                                    }
                                </Col>

                                <Col lg={4}>
                                    <OrderSummary
                                        products={cartroducts}
                                    />
                                </Col>


                            </Row>}
                </Container>}
        </>
    );
};

export default MyCart;