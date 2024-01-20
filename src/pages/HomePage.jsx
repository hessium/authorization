import React from 'react';
import {  Navigate } from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

const HomePage = () => {
 const {isAuth, email} = useAuth();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeUser())
    }

    return  isAuth ? (
        <div>
            <h1>Welcome</h1>
            <button
                onClick={(handleLogout)}
            >Log out from {email}</button>
        </div>
    ) : (
        <Navigate to="/login" />
    )
};

export default HomePage;