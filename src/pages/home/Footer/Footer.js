import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

import { IoIosAirplane } from "react-icons/io";
import { MdAddCall } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import '../../../pages/home/style/style.css';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={6} lg={3}>
                        <h6>CATEGORIES</h6>
                        <Link to="/">Television</Link>
                        <Link to="/">Air Condition</Link>
                        <Link to="/">Shoes</Link>
                        <Link to="/">LED Lamp</Link>
                        <Link to="/">Clothes</Link>
                        <Link to="/">Smart Phone</Link>
                        <Link to="/">Lapotps</Link>
                        <Link to="/">Fredge</Link>
                        <Link to="/">Smart Watch</Link>
                        <Link to="/">Micro Oven</Link>
                        <Link to="/">Washin Machine</Link>
                        <Link to="/">Bags</Link>
                    </Col>
                    <Col xs={6} lg={3}>
                        <h6>FURTHER INFO</h6>
                        <Link to="/">About us</Link>
                        <Link to="/">Gift Certificates</Link>
                        <Link to="/">Theme Styles</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Brands</Link>
                        <Link to="/">Partners</Link>
                        <Link to="/">Terms & Conditions</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Cash on delivery</Link>
                        <Link to="/">Return Policy</Link>
                        <Link to="/">Rewards Program</Link>
                    </Col>
                    <Col xs={6} lg={3} className='mt-4 mt-lg-0'>
                        <h6>BRANDS</h6>
                        <Link to="/">Samsung </Link>
                        <Link to="/">Adidas</Link>
                        <Link to="/">Lg</Link>
                        <Link to="/">Fila</Link>
                        <Link to="/">Dior</Link>
                        <Link to="/">Iphone</Link>
                        <Link to="/">Asus</Link>
                        <Link to="/">Sony</Link>
                        <Link to="/">Hisense</Link>
                        <Link to="/">Xiaomi</Link>
                        <Link to="/">Nick</Link>
                        <Link to="/">Tcl</Link>
                    </Col>
                    <Col xs={6} lg={3} className='mt-4 mt-lg-0'>
                        <h6>Panda Commerce</h6>
                        <aside style={{ color: '#2D638A', marginTop: '20px' }}>
                            <p><span><MdLocationOn /> </span>
                                2323, fs Road, Dhaka Bangladesh
                            </p>
                            <p><span className=""><MdEmail /> </span>
                                panndacommerce@gmail.com
                            </p>
                            <p><span className="texr"><MdAddCall /> </span>
                                Call us : +88019823283872
                            </p>
                            <span className='d-flex mb-3 gap-4' >
                                <h6 ><BsFacebook /></h6>
                                <h6 ><IoIosAirplane /></h6>
                                <h6 ><AiFillLinkedin /></h6>
                                <h6 ><AiFillTwitterCircle /></h6>

                            </span>
                            <input type="text" /><button>Send</button>
                        </aside>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;