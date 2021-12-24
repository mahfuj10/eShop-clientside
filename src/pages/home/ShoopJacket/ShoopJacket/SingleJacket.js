import React from 'react';
import { Col } from 'react-bootstrap';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './Shop.css';
import { FiShoppingCart } from 'react-icons/fi';
import { GrView } from 'react-icons/gr';
import ViewModal from '../../../QuickView/ViewModal/ViewModal';
import { useHistory } from 'react-router-dom';

const SingleJacket = ({ jacket }) => {

    const [modalShow, setModalShow] = React.useState(false);
    const { image, name, price, category, _id } = jacket;

    const buttonStyle = {
        borderRadius: '25px',
        padding: "1px 20px",
        backgroundColor: "white",
        border: "none",
        fontSize: '13px'
    }
    const history = useHistory();

    return (
        <>
            <article
                onClick={() => history.push(`/single-product/${_id}`)}
                className="rounded ms-5 jacketContainer p-3"
                style={{ width: '250px' }}>

                <FavoriteBorderIcon className="position-absolute" />
                <img className="mb-3" width="224" height="230" src={image} alt="" />
                <small className="text-secondary ">{category}</small>
                <h6 className="mt-1 product-title">{name.slice(0, 20)} ...</h6>
                <aside>
                    <span className="d-flex mt-1 justify-content-between">
                        <h6>${price}</h6>
                        <span className="text-danger fs-5 me-5">*******</span>
                    </span>
                </aside>

                {/* <aside className='position-absolute' style={{ bottom: '' }}>

                    <span className='d-block'>
                        <button onClick={() => setModalShow(true)} style={buttonStyle}><GrView /> Quick view</button>
                    </span>
                    <span>
                        <button style={buttonStyle}><FiShoppingCart /> Add to cart</button>

                    </span>
                </aside> */}
            </article>

            <ViewModal
                show={modalShow}
                product={jacket}
                onHide={() => setModalShow(false)}
            />
        </>
    )
};

export default SingleJacket;