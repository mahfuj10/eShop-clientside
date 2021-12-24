import React from 'react';
import { GrView } from 'react-icons/gr';
import { IoCartOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import AddToCart from '../../../Hooks/AddToCart';
import AddToWishdom from '../../../Hooks/AddToWishdom';
import ViewModal from '../../../QuickView/ViewModal/ViewModal';
import '../../style/style.css';

const Television = ({ television }) => {

    const { name, image, status, rating, oldPrice, price, _id } = television;
    const [modalShow, setModalShow] = React.useState(false);
    const { handaleAddToWishdom } = AddToWishdom();
    const { handaleAddToCart } = AddToCart();
    const history = useHistory();
    const handaleSeeDetails = () => history.push(`/single-product/${_id}`);

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


    return (

        <section className="homeAppliancesItem p-3 " style={{ width: '250px' }} >

            {status === 'sale' && <button className="px-2" style={buttonStyle}>{status}</button>}

            <img
                onClick={handaleSeeDetails}
                className="mb-3" width="250" height="250"
                src={image} alt="" />

            <br />

            {/* react rating */}

            <Rating initialRating={rating}
                style={{ fontSize: '13px', color: "#FFBA00" }}
                emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>

            <h6
                onClick={handaleSeeDetails}
                className="mt-2 product-title"
            >{name.slice(0, 42)}...</h6>
            <article>

                <h6 className="mt-3">$<strike>{oldPrice}</strike> from <span className="text-danger fw-bold">${price}</span></h6>

                <aside className="d-flex align-items-center justify-content-between">

                    <button
                        onClick={() => handaleAddToCart(television)}
                        className="py-2 gap-2 px-3 mt-3"
                        style={cartButton}
                    >
                        <IoCartOutline className="fs-5" />  Add To Cart
                    </button>

                    <aside
                        onClick={() => handaleAddToWishdom(television)}
                        className="wishdom-btn mt-3 p-2" >
                        <i className="far fa-heart fs-5"></i>
                    </aside>


                    <aside className="quick-view-button">
                        <span
                            onClick={() => setModalShow(true)}
                            className="quick-view">
                            <GrView /> Quick View</span>
                    </aside>


                </aside>
            </article>

            <ViewModal
                show={modalShow}
                product={television}
                onHide={() => setModalShow(false)}
            />


        </section>
    );
};

export default Television;