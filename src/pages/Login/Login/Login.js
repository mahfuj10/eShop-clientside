import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import '../LoginCss/Login.css';
import Register from '../Register/Register';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { GoogleSign, loginUser, error } = UseAuth();
    const history = useHistory();
    const location = useLocation();

    const signUpBox = () => {
        const formBox = document.getElementById("formBox");
        const body = document.querySelector(".loginBox");
        formBox.classList.add("active");
        body.classList.add("active");
    };
    const signInBox = () => {
        const formBox = document.getElementById("formBox");
        const body = document.querySelector(".loginBox");
        formBox.classList.remove("active");
        body.classList.remove("active");
    };

    const handaleSignIn = e => {
        e.preventDefault();
        loginUser(email, password, location, history);
    }

    return (
        <>
            {/* // <article className="d-flex justify-content-center align-items-centers">
        //     <button className="px-4 py-2 btn btn-danger"

        //         onClick={GoogleSign}

        //     >Google Sign</button>
        // </article> */}
            <h1>{error}</h1>
            <section className="loginBox">
                <article className="" style={{
                    position: 'relative',
                    width: '800px',
                    height: '500px'
                }}>
                    <article className="form-container">

                        <div className="box signIn">
                            <h3>Already Have an Account ?</h3>
                            <button id="signinBtn" onClick={signInBox} >Sign in</button>
                        </div>

                        <div className="box signUp">
                            <h3>Don't Have an Account ?</h3>
                            <button id="signupBtn" onClick={signUpBox}>Sign Up</button>
                        </div>

                    </article>

                    {/* sign in box */}
                    <article id="formBox">
                        <div className="form signinForm">
                            <form onSubmit={handaleSignIn}>

                                <h3>Sign In</h3>

                                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your Email" />

                                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your Password" />

                                <input type="submit" value="Sign In" className=" p-2 submitBtn" /><br />

                                <a href className="text-danger text-center forgetText"> Forget Password ?</a><br /><br />

                                <small>----------------- Or sign in with -----------------</small>

                                <aside className="d-flex justify-content-center mt-3 gap-4">
                                    <span className="SignMethod">
                                        <i class="fab fa-facebook"></i>
                                    </span>
                                    <span className="SignMethod">
                                        <i class="fab fa-google"></i>
                                    </span>
                                </aside>

                            </form>
                        </div>

                        {/* sign up box */}
                        <div className="form signUpForm">
                            <Register />
                        </div>
                    </article>


                </article>
            </section>

        </>
    );
};

export default Login;