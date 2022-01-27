import './SignInAndUp.style.scss';
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import React from 'react'
import Navbar from '../../components/Navbar';

const SignInAndUp = () => {
    return (
        <>
    <div className="sign-in-and-sign-up">
        < SignIn />
        < SignUp />
    </div>
        </>
    )
}

export default SignInAndUp
