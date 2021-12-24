import React from 'react';
import { useForm } from "react-hook-form";
import '../../../pages/home/style/style.css';
import UseAuth from '../../Hooks/UseAuth';
import UseFirebase from '../../Hooks/UseFirebase';

const ReviewForm = () => {

    const { register, handleSubmit, reset } = useForm();
    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const presentDate = today.getFullYear();
    today = day + '/' + month + '/' + presentDate;
    const { user } = UseAuth();

    const onSubmit = data => {
        data.date = today;
        data.image = user?.photoURL

        fetch('https://fathomless-sierra-85288.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(data))
            .then(data => {
                reset();
                alert('Thanks for your review ...')
            })
    };

    return (
        <section className="review-form">
            <h4 className="position-absolute ">Write a reivew</h4>
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                <label>Your Name</label> <br />
                <input required {...register("name")} /> <br />
                <label>Your Email</label> <br />
                <input {...register("email")} /> <br />
                <label>Rating</label> <br />
                <select  {...register("rating")}>
                    <option >Choose rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> <br />
                <label>You Message</label> <br />
                <textarea required {...register("description")} placeholder="Your Message" rows="4"></textarea>
                <input style={{ background: "#6388BE", border: '1px solid white', color: "white" }} value="Submit a Review" type="submit" />
            </form>
        </section>
    );
};

export default ReviewForm;