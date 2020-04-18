import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase-config";
import "./sign-in.component.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(
				this.state.email,
				this.state.password
			);
		} catch (error) {
			console.log(error);
		}
		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='signin'>
				<form onSubmit={this.handleSubmit}>
					<h2 className='title'>I have an account</h2>

					<h3 className='title'>
						Enter Your email and password or SignIn with google.
					</h3>
					<FormInput
						handleChange={this.handleChange}
						label='Email'
						type='email'
						value={this.state.email}
						required
						name='email'
					/>
					<FormInput
						handleChange={this.handleChange}
						label='Password'
						type='password'
						value={this.state.password}
						required
						name='password'
					/>
					<div className='buttons'>
						<Button type='submit'>SIGN IN</Button>
						<Button isSignedIn onClick={signInWithGoogle}>
							SIGN IN WITH GOOGLE
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
