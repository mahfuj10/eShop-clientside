import React from 'react';
import { GrView } from 'react-icons/gr';
import { IoCartOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import AddToCart from '../../Hooks/AddToCart';
import ViewModal from '../../QuickView/ViewModal/ViewModal';
import '../../../pages/home/style/style.css';
import AddToWishdom from '../../Hooks/AddToWishdom';
const Phones = ({ phone }) => {

    const { image, name, price, oldPrice, rating, _id } = phone;
    const [modalShow, setModalShow] = React.useState(false);
    const { handaleAddToWishdom } = AddToWishdom();
    const { handaleAddToCart } = AddToCart();
    const history = useHistory();
    const handaleHistoryPush = () => history.push(`/single-product/${_id}`);

    return (
        <>
            <article
                className="rounded product ms-5 p-3 "
                style={{ width: '250px' }}
            >

                <span className="btn position-absolute ms-3" style={{ background: "#FFD8D7" }}>10%</span>

                <aside className="button-container">
                    <span
                        onClick={() => setModalShow(true)}
                        className="view-btn"
                    >
                        <GrView /> Quick View</span>
                </aside>


                <aside style={{ height: '224px', width: '224px' }}>
                    <img
                        onClick={handaleHistoryPush}
                        className="mb-3" width="224"
                        src={image} alt="" />
                </aside>

                <small className="text-secondary ">Smartphones</small>

                <br />
                <Rating initialRating={rating}
                    style={{ fontSize: '13px', color: "#FFBA00" }}
                    emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>

                <h5
                    onClick={handaleHistoryPush}
                    className="mt-2 product-title"
                >{name}</h5>

                <h6 className="mt-3">$<strike>{oldPrice}</strike> from ${price}</h6>

                <aside className='d-flex mt-3 align-items-center justify-content-between'>
                    <button
                        className="py-2 gap-2 d-flex align-items-center px-3 "
                        onClick={() => handaleAddToCart(phone)}
                        style={{
                            fontWeight: '500',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: "25px"
                        }}
                    ><IoCartOutline className="fs-5" /> Add To Cart</button>

                    <button
                        onClick={() => handaleAddToWishdom(phone)}
                        title='Add to wishdom'
                        className="border-0 rounded-circle" style={{ padding: '10px 13px' }}>
                        <i className="far fa-heart fs-6"></i>
                    </button>

                </aside>



            </article>

            <ViewModal
                show={modalShow}
                product={phone}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Phones;