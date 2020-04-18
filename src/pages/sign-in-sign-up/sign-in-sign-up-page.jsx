import React from "react";
import SignIn from "../../components/signIn-signout/sign-in.component";
import "./sign-in-sign-up.scss";
import Signup from "../../components/signIn-signout/sign-up.component";

const SignInSignUp = () => (
	<div className='SignInSignUp'>
		<SignIn />
		<Signup />
	</div>
);

export default SignInSignUp;
