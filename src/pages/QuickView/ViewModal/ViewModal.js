import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Modal, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { GiRoyalLove } from 'react-icons/gi';
import Rating from 'react-rating';

const ViewModal = (props) => {

  const { name, image, rating, reviews, products, price, brand } = props.product;
  const [quantity, setQuantity] = useState(1);

  const decraseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const buttonStyle = {
    border: '1px solid black',
    padding: "6px 15px",
    marginRight: "20px",
    backgroundColor: 'white',

  }


  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>

        <Row className='align-items-center'>

          <Col lg={6}>
            <img className="img-fluid" src={image} alt="" />
          </Col>

          <Col lg={6}>

            <h4 className=" mb-3">{name}</h4>

            <aside className="d-flex align-items-center">

              <Rating initialRating={rating}
                style={{ fontSize: '13px', color: "#FFBA00", marginRight: '10px' }}
                emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>  {reviews} review

              <h6 className="mt-2 ms-5" style={{ color: 'red' }}>8 sold in lasi 24 hours</h6>

            </aside>

            <p className="mt-2 mb-0"> Brand: Ella - {brand}</p>
            <p className="mb-0">Avilable Products {products}</p>
            <p>Product Code: hjkk-098-lkjh</p>

            <p className="text-secondary" style={{ fontWeight: 400 }}> A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information .</p>

            <h4 >${price}</h4>

            <ToggleButtonGroup className="mt-2" type="checkbox">
              <ToggleButton
                onClick={decraseQuantity}
                id="tbg-btn-1" className="btn btn-danger" value={1}>
                <AiOutlineMinus />
              </ToggleButton>
              <ToggleButton id="tbg-btn-2" value={2}>
                {quantity}
              </ToggleButton>
              <ToggleButton
                onClick={() => setQuantity(quantity + 1)}
                id="tbg-btn-3" value={3}>
                <AiOutlinePlus />
              </ToggleButton>
            </ToggleButtonGroup> <br /> <br />


            <button style={buttonStyle}><BsCart2 /> Add to cart</button>
            <button style={buttonStyle}><GiRoyalLove /> Add to wishdom</button>


          </Col>

        </Row>



      </Modal.Body >
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal >
  );
};

export default ViewModal;