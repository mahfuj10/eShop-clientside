import React, { useEffect, useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './TrendingProduct.css';
import ViewModal from '../../QuickView/ViewModal/ViewModal';

const TrendingProduct = ({ product }) => {

    const [modalShow, setModalShow] = React.useState(false);


    const [viewProduct, setViewProduct] = useState({});
    const { image, name, price, category } = product;

    useEffect(() => {
        fetch(`https://fathomless-sierra-85288.herokuapp.com//products/${product._id}`)
            .then(res => res.json())
            .then(data => setViewProduct(data))
    }, [product])



    return (

        <>

            <Col xs={12} md={3}>
                <article className="trending-product rounded p-3" style={{ height: "500px" }}>
                    <FavoriteBorderIcon />
                    <img className="mb-4" width="290" height="276" src={image} alt="" />
                    <small className="text-secondary ">{category}</small>
                    <h6 className="mt-2 mb-3">{name}</h6>
                    <span className="d-flex justify-content-between">
                        <h6>${price}</h6>
                        <span className="text-danger fs-5 me-5">******</span>
                    </span>

                    <aside className="mt-3 cart-button">
                        <Button variant="danger" style={{ padding: "6px 80px" }} size="md ">
                            <AddShoppingCartIcon />  Add to Cart
                        </Button>
                        <p onClick={() => setModalShow(true)} className="text-center mt-2"><RemoveRedEyeIcon /> Quick View</p>
                    </aside>


                </article>
            </Col>



            <ViewModal
                show={modalShow}
                product={viewProduct}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default TrendingProduct;