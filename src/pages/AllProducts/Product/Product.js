import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import AddToCart from '../../Hooks/AddToCart';
import AddToWishdom from '../../Hooks/AddToWishdom';

const Product = ({ product }) => {

    const { image, name, rating, price, _id } = product;
    const history = useHistory();
    const handaleSeeDetails = () => history.push(`/single-product/${_id}`);
    const { handaleAddToCart } = AddToCart();
    const { handaleAddToWishdom } = AddToWishdom();

    return (

        <Col >
            <Card className='shadow-sm' style={{ width: '18rem', marginBottom: '40px' }}>
                <aside onClick={handaleSeeDetails} style={{ height: '320px' }}>
                    <img className="mb-3" width="250" src={image} alt="" />
                </aside>
                <Card.Body>
                    <Card.Title className='product-title mt-4'>{name.slice(0, 50)}...</Card.Title>
                    <Card.Text>
                        <Rating initialRating={rating}
                            style={{ fontSize: '13px', color: "#FFBA00" }}
                            emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>
                        <h6 className='mt-2'>${price}</h6>
                    </Card.Text>

                    <button className='border-1 p-2' onClick={() => handaleAddToCart(product)}><FiShoppingCart /> Add To Cart</button>
                    <button className='border-1 p-2 ms-3' onClick={() => handaleAddToWishdom(product)}><AiOutlineHeart /></button>

                </Card.Body>


            </Card>
        </Col>
    );
};

export default Product;