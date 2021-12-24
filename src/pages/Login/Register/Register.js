import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import UseFirebase from '../../Hooks/UseFirebase';


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, registerUser } = UseFirebase();
    const location = useLocation();
    const history = useHistory();

    const handaleRegisterUser = e => {
        e.preventDefault();
        registerUser(email, password, name, history, location);
    }
    return (

        <div>
            <h4 className="mb-4">Sign Up</h4>
            <form onSubmit={handaleRegisterUser}>

                <input onChange={e => setName(e.target.value)} placeholder=" Name" type="text" />
                <input onChange={e => setEmail(e.target.value)} placeholder=" Email" type="email" />
                <input onChange={e => setPassword(e.target.value)} placeholder=" Password" type="password" />
                <input type="submit" variant="danger" value="Sign Up" />

            </form>
            <small>---------------- Or sign up with ----------------</small>
            <aside className="d-flex justify-content-center gap-4">
                <span className="SignMethod"><i class="fab fa-facebook"></i></span>
                <span className="SignMethod"><i class="fab fa-google"></i></span>
            </aside>
        </div>
    );
};

export default Register;