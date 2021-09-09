import React, { Component } from 'react';
import './sign-in.styles.scss';
import { FormInput } from './../form-input/form-input.component';
import { CustomButton } from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an accound</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="email"
						autoComplete="off"
						required
					/>
					<FormInput
						type="password"
						name="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="password"
						required
						autoComplete="new-password"
					/>
					<div className="buttons">
						<CustomButton type="submit" value="Submit Form">
							Sign in
						</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
