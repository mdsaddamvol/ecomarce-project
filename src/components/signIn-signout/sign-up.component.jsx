import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";
import { auth, createUserindatabase } from "../../firebase/firebase-config";
import "./sign-up.style.scss";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Password did not match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserindatabase(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='signup'>
				<h2 className='title'>I don't have an account</h2>
				<h3 className='title'>Sign Up with your information ! </h3>
				<form onSubmit={this.handleSubmit} className='signup-form'>
					<FormInput
						handleChange={this.handleChange}
						label='Name'
						type='text'
						value={displayName}
						required
						name='displayName'
					/>

					<FormInput
						handleChange={this.handleChange}
						label='Email'
						type='email'
						value={email}
						required
						name='email'
					/>
					<FormInput
						handleChange={this.handleChange}
						label='password'
						type='password'
						value={password}
						required
						name='password'
					/>
					<FormInput
						handleChange={this.handleChange}
						label='Confirm password'
						type='password'
						value={confirmPassword}
						required
						name='confirmPassword'
					/>
					<Button type='submit' onClick={this.onSubmit}>
						SIGN UP
					</Button>
				</form>
			</div>
		);
	}
}

export default Signup;
