import React, { useEffect } from 'react';
import { useState } from 'react';
import { ButtonGroup, Col, Container, Row, Button, Alert } from 'react-bootstrap';
import Rating from 'react-rating';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { BiHeart } from 'react-icons/bi'
import { FaShippingFast } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { BsArrowBarRight, BsFillQuestionOctagonFill } from 'react-icons/bs';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductReview from '../ProductReview/ProductReview';
import RelatedProduct from '../ProductReview/RelatedProduct';
import Footer from '../../home/Footer/Footer';
import AddToCart from '../../Hooks/AddToCart';



const ProductDetails = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { price, name } = product;

    const buttonStyle = {
        border: "1px solid black",
        padding: "8px 60px",
        background: "#fff",
        borderRadius: "25px",
    }
    const buyNowBtn = {
        border: "1px solid black",
        padding: "8px 60px",
        background: "#fff",
        borderRadius: "25px",
        width: "88%"
    }


    // window.scrollTo(0, 0)

    useEffect(() => {
        fetch(`https://fathomless-sierra-85288.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { handaleAddToCart } = AddToCart();
    // document.querySelector('.product-price').innerHTML = `$ ${quantity * price}`

    return (
        <>

            <article
                style={{ background: "#373F50", height: "190px" }}>
                <aside className="d-flex align-items-center justify-content-around pt-5">
                    <h3
                        style={{ marginLeft: "50px", fontWeght: "bold", color: "#fff" }}
                    >
                        {product?.name?.slice(0, 50)}
                    </h3>
                    <h6 style={{ color: "white", marginRight: '80px' }}>Home <BsArrowBarRight className='fs-4' /> Product Detials</h6>
                </aside>
            </article>

            <Container className='mb-5 pb-5 mt-5 mt-md-0'>
                <Row className="shadow p-5 mb-5 rounded-3 align-items-center" style={{ marginTop: "-60px", background: "#fff" }}>

                    <Col lg={6} className="d-flex justify-content-center">
                        <img className="img-fluid" src={product?.image} alt="productimage" />
                    </Col>

                    <Col lg={6}>

                        <h5>{name}</h5>
                        <h3 className='mt-2 product-price'>$  {price}</h3>

                        <Rating initialRating={product?.rating}
                            style={{ fontSize: '13px', color: "#FFBA00" }}
                            emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating> <span style={{ color: "#545F73", fontWeight: "500" }}> {product?.reviews} reviews</span>
                        <p
                            style={{ color: "#545F73", marginTop: "15px", fontWeight: '500' }}
                        >
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati del cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis estem.
                        </p>

                        <ButtonGroup aria-label="Basic example" style={{ width: "200px" }}>
                            <Button
                                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                style={{ background: "#373F50" }}>
                                <AiOutlineMinus />
                            </Button>

                            <Button style={{ background: "#fff", color: "black" }}>{quantity}</Button>

                            <Button
                                onClick={() => setQuantity(quantity + 1)}
                                style={{ background: "#131921" }}>
                                <AiOutlinePlus />
                            </Button>
                        </ButtonGroup> <br /> <br />

                        <aside className="d-flex flex-wrap gap-3">

                            <button
                                onClick={() => handaleAddToCart(product)}
                                style={buttonStyle} className="d-flex align-items-center">
                                <BiCart className="fs-4" />
                                <span style={{ fontWeight: "500" }}>Add To Cart</span>
                            </button>

                            <button style={buttonStyle} className="d-flex align-items-center">
                                <BiHeart className="fs-4" />
                                <span style={{ fontWeight: "500" }}> Add To Wishdom</span>
                            </button>
                        </aside>

                        <button className=" mt-4" style={buyNowBtn}>Buy Now</button>

                        <aside className="mt-3">
                            <Alert style={{ borderLeft: "3px solid #131921", background: "#F6F9FC" }}>
                                <h6><MdSecurity /> Security policy</h6>
                            </Alert>
                            <Alert style={{ borderLeft: "3px solid #131921", background: "#F6F9FC" }}>
                                <h6>  <FaShippingFast /> Fast and convenient door to door delivery</h6>
                            </Alert>

                        </aside>

                    </Col>

                </Row>
            </Container>
            <ProductReview />
            <RelatedProduct category={product?.category} />
            <Footer />
        </>
    );
};

export default ProductDetails;