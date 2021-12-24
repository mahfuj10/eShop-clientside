import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';

const CheckoutForm = () => {

    const { register, handleSubmit } = useForm();
    const { user } = UseAuth();

    const onSubmit = data => { }

    return (
        <section className="review-form shadow-sm">

            <article className='d-flex mb-3 d-md-grid d-lg-flex align-items-center gap-3'>
                <span className='border border-secondary rounded-circle p-1'>
                    <img className='rounded-circle' src={user.photoURL} alt={user.displayName} />
                </span>
                <span>
                    <h5>{user.displayName}</h5>
                    <h6 style={{ fontSize: '14px' }}>{user.email}</h6>
                </span>
            </article>

            <h4 className="position-absolute">Delevery Address</h4>
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label> <br />
                <input defaultValue={user.displayName} required {...register("firstname")} /> <br />
                <label>Last Name</label> <br />
                <input required {...register("lastname")} /> <br />
                <label>Your Email</label> <br />
                <input defaultValue={user.email}  {...register("email")} /> <br />

                <label>Address</label> <br />
                <textarea required {...register("description")} placeholder="Your Message" rows="4"></textarea>
                <input style={{ background: "#6388BE", border: '1px solid white', color: "white" }} value="Submit" type="submit" />
            </form>
        </section>
    );
};

export default CheckoutForm;