import React from 'react';
import Rating from 'react-rating';
import '../../style/style.css';
import { IoCartOutline } from 'react-icons/io5';
import { GrView } from 'react-icons/gr';
import '../../style/style.css';
import ViewModal from '../../../QuickView/ViewModal/ViewModal';
import { useHistory } from 'react-router-dom';
import AddToCart from '../../../Hooks/AddToCart';
import AddToWishdom from '../../../Hooks/AddToWishdom';

const HomeElectronics = ({ product }) => {

    const { name, image, status, rating, oldPrice, price, _id } = product;
    const [modalShow, setModalShow] = React.useState(false);
    const history = useHistory();
    const handaleSeeDetails = () => history.push(`/single-product/${_id}`);
    const { handaleAddToCart } = AddToCart();
    const { handaleAddToWishdom } = AddToWishdom();

    const buttonStyle = {
        border: 'none',
        backgroundColor: '#FFD8D7',
        color: 'red',
        position: 'absolute',
        left: 40,
        top: 50
    }

    return (
        <>
            <section className="homeAppliancesItem p-3 " style={{ width: '250px' }} >

                {status === 'sale' && <button style={buttonStyle}>{status}</button>}

                <img
                    onClick={handaleSeeDetails}
                    className="mb-3" width="250" height="250"
                    src={image} alt="" /><br />

                <Rating initialRating={rating}
                    style={{ fontSize: '13px', color: "#FFBA00" }}
                    emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>

                <h6
                    onClick={handaleSeeDetails}
                    className="mt-2 product-title"
                >{name.slice(0, 45)}...</h6>

                <h6 className="mt-3">$<strike>{oldPrice}</strike> from <span className="text-danger fw-bold">${price}</span></h6>

                <aside className="d-flex align-items-center justify-content-between">
                    <button
                        onClick={() => handaleAddToCart(product)}
                        className="py-2 gap-2 d-flex align-items-center px-3 mt-3"
                        style={{
                            fontWeight: '500',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: "25px"
                        }}
                    ><IoCartOutline className="fs-5" />  Add To Cart</button>

                    <aside
                        onClick={() => handaleAddToWishdom(product)}
                        className="wishdom-btn mt-3 p-2"
                    >
                        <i className="far fa-heart fs-5"></i>
                    </aside>

                    <aside className="quick-view-button">
                        <button
                            onClick={() => setModalShow(true)}
                            className="quick-view">
                            <GrView /> Quick View</button>
                    </aside>
                </aside>


            </section>
            <ViewModal
                show={modalShow}
                product={product}
                onHide={() => setModalShow(false)}
            />
        </ >
    );
};

export default HomeElectronics;