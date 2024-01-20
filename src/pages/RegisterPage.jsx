import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <p>
                Or <Link to='/login'>login</Link>
            </p>
            <SignUp />
        </div>
    );
};

export default RegisterPage;