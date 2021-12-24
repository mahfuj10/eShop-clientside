import React from 'react';
import Rating from 'react-rating';
import { Link, useHistory } from 'react-router-dom';
import Cart_Wishdom_Products from '../../Hooks/Cart_Wishdom_Products';
import { AiFillDelete } from 'react-icons/ai';
import emptyCart from '../../../images/empty-cart.gif';
import { Spinner } from 'react-bootstrap';

const DashboardWishlist = () => {

    const { wishdomProducts, handaleDeleteProduct, loading } = Cart_Wishdom_Products();
    const history = useHistory();

    if (loading) return <Spinner animation="border" />

    return (
        <section>
            {wishdomProducts.length === 0 ? <article style={{ height: '50vh', width: '100%' }}>

                <aside className='d-flex justify-content-center'>
                    <img src={emptyCart} alt="emtycartgif" />
                </aside>
                <aside className='d-grid justify-content-center mt-4'>
                    <h6 className='text-center text-secondary '>Your wishlist is empty</h6>
                    <Link to="">
                        <button className='border-1'>GO TO SHOP</button>
                    </Link>
                </aside>

            </article> :
                <div>
                    <hr />
                    {
                        wishdomProducts.map(product => <>
                            <article className='d-flex gap-3 align-items-center'>

                                <aside>
                                    <img width="130" src={product?.image} alt="" />
                                </aside>

                                <aside>
                                    <h6
                                        onClick={() => history.push(`/single-product/${product._id}`)}
                                        className='product-title'>{product?.name}</h6>

                                    <Rating initialRating={product.rating}
                                        style={{ fontSize: '13px', color: "#FFBA00", marginTop: '10px' }}
                                        emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating> <span style={{ fontWeight: '500' }}>{product.reviews} Review</span>

                                    <span className='d-flex mt-2 align-items-center'>
                                        <h5 className='mt-2'>${product?.price}</h5>
                                        <button
                                            onClick={() => handaleDeleteProduct(product?._id)}
                                            style={{ marginLeft: '100px' }}
                                            className='btn py-1 border-1 border-danger bg-light text-danger'>
                                            <AiFillDelete /> Delete
                                        </button>
                                    </span>
                                </aside>

                            </article>
                            <hr />
                        </>)}
                </div>
            }
        </section>
    );
};

export default DashboardWishlist;