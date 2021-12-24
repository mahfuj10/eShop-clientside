import React from 'react';
import { AiFillDelete, AiOutlineHeart } from 'react-icons/ai';
import Rating from 'react-rating';
import AddToCart from '../Hooks/AddToCart';
import AddToWishdom from '../Hooks/AddToWishdom';

const CartProduct = ({ product }) => {

    const { name, image, reating, price, rating, reviews, _id } = product;

    const { handaleDelete } = AddToCart();
    const { handaleAddToWishdom } = AddToWishdom();

    const buttonStyle = {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        padding: '5px',
        backgroundColor: '#EFEFEF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (

        <>
            <section className='d-flex gap-3 align-items-center'>

                <article >
                    <img src={image} width="150" alt="" />
                </article>

                <article>

                    <h5 className='product-title'>{name}</h5>
                    <Rating initialRating={rating}
                        style={{ fontSize: '13px', color: "#FFBA00" }}
                        emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating> <small>{reviews} reviews</small>
                    <h5 className='mt-2 text-danger'>${price}</h5>

                    <span className='d-flex mt-3 gap-4  align-items-center'>
                        <h5
                            onClick={() => handaleDelete(_id)}
                            style={buttonStyle} ><AiFillDelete /></h5>
                        <h5
                            onClick={() => handaleAddToWishdom(product)}
                            style={buttonStyle}><AiOutlineHeart /></h5>
                    </span>
                </article>

            </section>
            <hr />
        </>
    );
};

export default CartProduct;