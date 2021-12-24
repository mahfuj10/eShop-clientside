import React from 'react';
import AddToCart from '../../Hooks/AddToCart';

const CheckoutProduct = () => {

    const { cartroducts } = AddToCart();
    let total = 0;
    cartroducts.map(product => {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
    });

    return (
        <section className='shadow p-3' style={{ width: '350px', borderRadius: '10px' }}>
            <h6 className='text-center mb-5 pt-3'>Order summary</h6>
            {
                cartroducts.map(product => <>
                    <article className='d-flex gap-3 align-items-center'>
                        <aside>
                            <img width="67" src={product.image} alt="productimage" />
                        </aside>
                        <aside>
                            <h6 style={{ fontSize: '0.875rem' }}>
                                {product.name}
                            </h6>
                            <h6>${product.price}</h6>
                        </aside>
                    </article>
                    <hr />
                </>)
            }

            <article>

                <h6 className='d-flex justify-content-between align-items-center'><span>Subtotal:</span> <span>${total}</span></h6>
                <h6 className='d-flex justify-content-between align-items-center'><span>Delevery charge:</span> <span>$5</span></h6>
                <hr />
                <h4 className='text-center'>${total + 5}</h4>
            </article>

        </section>
    );
};

export default CheckoutProduct;