import Button from '@restart/ui/esm/Button';
import React, { useContext, useState } from 'react';
import { Badge, Container, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GiSelfLove } from 'react-icons/gi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { IoSearchSharp } from 'react-icons/io5';
import { RiMenu3Line } from 'react-icons/ri';
import { BsBagDash } from 'react-icons/bs';
import '../../../pages/home/style/style.css';
import { Link, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Cart_Wishdom_Products from '../../Hooks/Cart_Wishdom_Products';
import AddToCart from '../../Hooks/AddToCart';
import { createContext } from 'react';
import { useEffect } from 'react';
import OffCanvas from '../OffCanvas/OffCanvas';

export const searchContext = createContext();

const Navigation = () => {

    const { wishdomProducts } = Cart_Wishdom_Products();
    const { cartroducts } = AddToCart();
    const { user, logOut } = UseAuth();
    const [searchProduct, setSearchProduct] = useContext(searchContext);
    const history = useHistory();
    const iconStyle = {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        // boxShadow: '-3px -3px 7px #ffffff ,3px 3px 5px #ceced1'
    };
    const navlink = {
        marginLeft: "30px",
        fontWeight: 500,
        textDecoration: "none",
        color: "white"
    };
    const badge = {
        marginLeft: '30px',
        top: '15px',
        position: 'absolute',
        color: 'black',
        background: "red"

    };

    // enter trigger
    useEffect(() => {
        // Get the input field
        const searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("keyup", function (event) {

            if (event.keyCode === 13) {
                history.push(`/allproducts`)
            }
        });

    }, [history]);

    // offcanvas
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    useEffect(() => {
        console.log(searchProduct);
    }, [searchProduct])

    return (
        <>
            <Navbar className="pt-2 mb-5" style={{ backgroundColor: "#131921" }} >

                <h5 className='position-absolute text-danger'>{user.displayName}</h5>
                {/* <button onClick={logOut} className='mt-5'>
                <h5 className=' text-danger' >Log Out</h5>
            </button> */}

                <Container className="pt-3 pb-5">
                    <Navbar.Brand href="#home" className="text-light">eShop </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

                    <Navbar.Collapse id="basic-navbar-nav">

                        <InputGroup className="mx-lg-5" style={{ marginLeft: "%" }}>
                            <FormControl
                                onChange={e => setSearchProduct(e.target.value)}
                                placeholder="Search..."
                                id='searchInput'
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button className="px-3   border-1" variant="outline-secondary" style={{ backgroundColor: 'white', borderColor: '#ced4da' }} id="button-addon2">
                                <IoSearchSharp className="fs-4" />
                            </Button>
                            <Button
                                onClick={handleShow}
                                className="px-3 d-lg-none ms-5  border-0" variant="outline-secondary"
                                style={{ backgroundColor: '#131921', color: "#fff" }} id="button-addon2"
                            >
                                <RiMenu3Line className="fs-3" />
                            </Button>

                        </InputGroup>
                        <Nav className="ms-auto  d-none d-lg-block">
                            <article className="d-flex gap-4 justify-content-center mt-4 mt-lg-0">
                                <span title="Your cart item" className="bg-light" style={iconStyle}>
                                    <Link to="/cart" className="fs-4 h-100 text-dark d-flex justify-content-center align-items-center">
                                        <BsBagDash />
                                    </Link>
                                    {cartroducts.length > 0 && <Badge style={badge} >{cartroducts.length}</Badge>}
                                </span>
                                <span title="My Wishdom" className="bg-light" style={iconStyle}>
                                    <Link to="/wishdom" className="fs-4 h-100 text-dark d-flex justify-content-center align-items-center">
                                        <GiSelfLove />
                                    </Link>
                                    {wishdomProducts.length > 0 && <Badge style={badge} >{wishdomProducts.length}</Badge>}
                                </span>
                                <span title="My Account" className="bg-light" style={iconStyle}>
                                    <Link to="/dashboard" className="fs-4 h-100 text-dark d-flex justify-content-center align-items-center">
                                        <MdOutlineManageAccounts />
                                    </Link>
                                </span>

                            </article>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <article
                    className="position-absolute navbar-items d-flex align-items-center"
                    style={{ width: "100vw", marginTop: "130px", background: "#232F3E", paddingLeft: "150px", height: "60px", }}
                >
                    <NavDropdown style={{ fontWeight: '500' }} title="CATEGORY" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Link style={navlink} to="/home">HOME</Link>
                    <Link style={navlink} to="/login">LOGIN</Link>
                    <Link style={navlink} to="/cart">MY CART</Link>
                    <Link style={navlink} to="/wishdom">MY WISHDOM</Link>
                    <Link style={navlink} to="/dashboard">DASHBOARD</Link>
                </article>


            </Navbar>

            {/* bootstrap offcanvas */}

            <OffCanvas
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
            />
        </>


    );
};

export default Navigation;