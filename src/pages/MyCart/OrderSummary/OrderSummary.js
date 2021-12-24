import React from 'react';

const OrderSummary = ({ products }) => {

    let total = 0;
    products.map(product => {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
    });

    return (
        <article
            className='bg-light shadow-sm'
            style={{ border: '1px solid #C8C9CA', width: "300px", padding: '20px', position: 'fixed' }}
        >

            <h5>Order Summary</h5>
            <h6 className='d-flex justify-content-between mt-3'>Total items: <span>{products.length}</span></h6>
            <h6 className='d-flex justify-content-between'>Subtotal: <span>${total.toFixed()}</span> </h6>
            <h6 className='d-flex justify-content-between'>Shipping Fee: <span>$5</span></h6>
            <h6 className='d-flex justify-content-between'>Total: <span>${(total + 5).toFixed()}</span></h6>

            <button className="w-100 mt-2 btn btn-danger">PROCEED TO CHECKOUT</button>

        </article>
    );
};

export default OrderSummary;