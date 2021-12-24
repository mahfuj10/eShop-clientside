import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import AddToCart from '../Hooks/AddToCart';
import { IoCartOutline } from 'react-icons/io5';



const WishdomProduct = ({ wishdomProduct }) => {

    const { image, name, price, rating, reviews, _id } = wishdomProduct;
    const history = useHistory();
    const handaleSeeDetails = () => history.push(`/single-product/${_id}`);
    const { handaleAddToCart } = AddToCart();



    return (
        <Col lg={6}>
            <article className='d-flex mt-5 shadow-sm mb-4 align-items-center gap-2'>

                <aside>
                    <img onClick={handaleSeeDetails} width="250" src={image} alt="" />
                </aside>

                <aside>
                    <h6 onClick={handaleSeeDetails} className='product-title'>{name}</h6>
                    <Rating initialRating={rating}
                        style={{ fontSize: '13px', color: "#FFBA00" }}
                        emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating> <span style={{ fontWeight: '500' }}>{reviews} Review</span>
                    <h5 className='mt-2'>${price}</h5>

                    <button
                        onClick={() => handaleAddToCart(wishdomProduct)}
                        style={{ borderRadius: '25px' }}
                        className='border-1 bg-light mt-2 px-3 py-1'><IoCartOutline className="fs-5" />  Add to Cart
                    </button>

                </aside>

            </article>

        </Col>
    );
};

export default WishdomProduct;