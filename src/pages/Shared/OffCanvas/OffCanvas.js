import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const OffCanvas = ({ handleClose, handleShow, show }) => {


    return (
        <>
            <Offcanvas style={{ overflow: "hidden", background: "silver", width: '50%' }} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffCanvas;