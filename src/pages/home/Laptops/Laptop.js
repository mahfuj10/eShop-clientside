import React from 'react';
import { GrView } from 'react-icons/gr';
import { IoCartOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import AddToCart from '../../Hooks/AddToCart';
import AddToWishdom from '../../Hooks/AddToWishdom';
import ViewModal from '../../QuickView/ViewModal/ViewModal';

const Phones = ({ laptop }) => {

    const { image, name, price, oldPrice, rating, _id } = laptop;
    const [modalShow, setModalShow] = React.useState(false);
    const { handaleAddToWishdom } = AddToWishdom();
    const history = useHistory();
    const handaleSeeDetials = () => {
        history.push(`/single-product/${_id}`);
    }
    const { handaleAddToCart } = AddToCart();

    return (
        <>
            <article
                className="rounded ms-5 product p-3 " style={{ width: '250px' }}>


                <aside className="button-container">
                    <span
                        onClick={() => setModalShow(true)}
                        className="view-btn"><GrView /> Quick View</span>
                </aside>

                <aside style={{ height: '224px', width: '224px' }}>
                    <img
                        onClick={handaleSeeDetials}
                        className="mb-1" width="224"
                        src={image} alt="productImage" />
                </aside>

                <small className="text-secondary ">Laptop</small>

                <br />
                <Rating initialRating={rating}
                    style={{ fontSize: '13px', color: "#FFBA00" }}
                    emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>

                <h6
                    className="mt-2 product-title"
                    onClick={handaleSeeDetials}
                >{name.slice(0, 60)}...</h6>
                <h6 className="mt-2">$<strike>{oldPrice}</strike> from ${price}</h6>
                <aside className='d-flex mt-3 align-items-center justify-content-between'>
                    <button
                        className="py-2 gap-2 d-flex align-items-center px-3 "
                        onClick={() => handaleAddToCart(laptop)}
                        style={{
                            fontWeight: '500',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: "25px"
                        }}
                    ><IoCartOutline className="fs-5" />  Add To Cart</button>

                    <button
                        onClick={() => handaleAddToWishdom(laptop)}
                        title='Add to wishdom'
                        className="border-0 rounded-circle " style={{ padding: '10px 13px' }}>
                        <i className="far fa-heart fs-6"></i>
                    </button>

                </aside>
            </article>

            <ViewModal
                show={modalShow}
                product={laptop}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Phones;