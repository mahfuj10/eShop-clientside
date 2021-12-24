import React from 'react';
import { Col } from 'react-bootstrap';
import { GrView } from 'react-icons/gr';
import { IoCartOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import AddToCart from '../../Hooks/AddToCart';
import AddToWishdom from '../../Hooks/AddToWishdom';
import ViewModal from '../../QuickView/ViewModal/ViewModal';

const FlashItem = ({ product }) => {

    const { name, image, status, rating, oldPrice, price, _id } = product;
    const [modalShow, setModalShow] = React.useState(false);
    const { handaleAddToCart } = AddToCart();
    const { handaleAddToWishdom } = AddToWishdom();

    const buttonStyle = {
        border: 'none',
        backgroundColor: '#FFD8D7',
        color: 'red',
        position: 'absolute',
        left: 40,
        top: 50,

    }

    const cartButton = {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '500',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: "25px"
    }


    const addItemOnCart = () => {
        handaleAddToCart(product);
    }

    const history = useHistory();
    const handaleHistoryPush = () => history.push(`/single-product/${_id}`);

    return (

        <article
            className="homeAppliancesItem p-3"
            style={{ width: '250px', zIndex: '-8' }} >

            {status === 'sale' && <button className="px-2" style={buttonStyle}>{status}</button>}

            <aside onClick={handaleHistoryPush} style={{ height: '320px' }}>
                < img className="mb-3" width="250" src={image} alt="" />
            </aside>

            <br />


            <Rating initialRating={rating}
                style={{ fontSize: '13px', color: "#FFBA00" }}
                emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>

            <h6 className="mt-2 product-title"
                onClick={handaleHistoryPush}
            >{name.slice(0, 42)}...</h6>

            <h6 className="mt-3">$<strike>{oldPrice}</strike> from <span className="text-danger fw-bold">${price}</span></h6>

            <aside className="d-flex ss align-items-center justify-content-between" style={{ zIndex: "99" }}>

                <button
                    onClick={addItemOnCart}
                    className="py-2 gap-2 px-3 mt-3"
                    style={cartButton}
                    title='Add to cart'
                >
                    <IoCartOutline className="fs-5" />  Add To Cart
                </button>

                <aside
                    title='Add to wishdom'
                    onClick={() => handaleAddToWishdom(product)}
                    className="wishdom-btn mt-3 p-2" >
                    <i className="far fa-heart fs-5"></i>
                </aside>





            </aside>

            <ViewModal
                show={modalShow}
                product={product}
                onHide={() => setModalShow(false)}
            />

            <aside className="quick-view-button">
                <span
                    onClick={() => setModalShow(true)}
                    className="quick-view">
                    <GrView /> Quick View</span>
            </aside>
        </article >

    );
};

export default FlashItem;