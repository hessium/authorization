import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <p>
                Or <Link to='/register' >
                        register
                    </Link>
            </p>
            <Login />
        </div>
    );
};

export default LoginPage;