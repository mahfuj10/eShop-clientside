import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import DashboardWishlist from '../DashboardWishlist/DashboardWishlist';

const Dashboard = () => {

    const { user } = UseAuth();
    let { path, url } = useRouteMatch();

    const buttonStyle = {
        width: '100%',
        padding: '5px',
        border: 'none',
        backgroundColor: '#fff',
        fontWeight: '500'

    }

    return (
        <>
            <Container>
                <Row >
                    <Col xs={12} md={4} className='shadow rounded-3 h-50 pt-5 pb-5 mb-5'>
                        <aside className='d-flex d-md-grid d-lg-flex align-items-center gap-3'>
                            <span className='border border-secondary rounded-circle p-1'>
                                <img className='rounded-circle' src={user.photoURL} alt={user.displayName} />
                            </span>
                            <span>
                                <h5>{user.displayName}</h5>
                                <h6 style={{ fontSize: '14px' }}>{user.email}</h6>
                            </span>
                        </aside>

                        <Link to={`${url}/Orders`}>
                            <hr />
                            <button style={buttonStyle}>ORDERS</button>
                            <hr />
                        </Link>
                        <Link to={`${url}/Wishdom`}>
                            <button style={buttonStyle}>WISHDOM</button>
                            <hr />
                        </Link>



                    </Col>
                    <Col xs={12} md={8} className='mt-5 mt-md-0'>
                        <Switch>
                            <Route exact path={path}>

                            </Route>
                            <Route path={`${path}/Orders`}>
                                <h1>Orders</h1>
                            </Route>
                            <Route path={`${path}/Wishdom`}>
                                <DashboardWishlist />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;