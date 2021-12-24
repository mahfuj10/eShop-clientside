import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cart_Wishdom_Products from '../Hooks/Cart_Wishdom_Products';
import Navigation from '../Shared/Navigation/Navigation';
import WishdomProduct from './WishdomProduct';

const MyWishdom = () => {

    const { wishdomProducts } = Cart_Wishdom_Products();

    return (
        <>
            <Container>
                <Row>
                    {
                        wishdomProducts.map(wishdomProduct => <WishdomProduct
                            key={wishdomProduct._id}
                            wishdomProduct={wishdomProduct}
                        />)
                    }
                </Row>

            </Container>

        </>
    );
};

export default MyWishdom;