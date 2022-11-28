import React, { useState, useContext, Fragment } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import GlassModal from '../glass-popup/glass-popup.component'

import { UserContext } from '../../context/user.context'

import { SignInContainer } from './sign-in.styles'

import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils.js'

const defaultFormFields = {
	email: '',
	password: '',
}

/* Create a class component to store state */
const SignIn = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const [modal, setModal] = useState(false)
	const [error, setError] = useState('')
	const { email, password } = formFields
	const { currentUser, setCurrentUser } = useContext(UserContext)

	const showModal = () => {
		setModal(!modal)
	}

	const updateUser = (user) => {
		console.log('USER: ' + user)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const user = await signInAuthUserWithEmailAndPassword(
				email,
				password
			)

			updateUser(user)
			/* Clear out the state */
			setFormFields(defaultFormFields)
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					setError('Incorrect password for email.')
					showModal()
					setFormFields((prevFormFields) => ({
						...prevFormFields,
						password: '',
					}))
					break
				case 'auth/user-not-found':
					setError('User not found.')
					showModal()
					setFormFields(defaultFormFields)
					break
				default:
					console.log('ERROR: ' + error)
			}
		}
	}

	const googleSignIn = async () => {
		const { user } = await signInWithGooglePopup()
		const userDocRef = await createUserDocumentFromAuth(user)
		setCurrentUser(user.displayName)
	}

	/* Handles the change of Input  AND password fields*/
	const handleChange = (event) => {
		/* Pull value and name off of target */
		const { value, name } = event.target

		setFormFields({ ...formFields, [name]: value })
	}

	return (
		<Fragment>
			<SignInContainer>
				<h2 className='maroon'>Already have an account?</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={email}
						label='Email'
						onChange={handleChange}
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={password}
						label='Password'
						onChange={handleChange}
						required
					/>

					<div className='buttons'>
						<CustomButton className='custom-button' type='submit'>
							Sign In
						</CustomButton>

						<CustomButton onClick={googleSignIn} isGoogleSignIn>
							{' '}
							<div className='logo'>
								<img
									src='../../images/google.png'
									alt='Google'
								/>
							</div>
							Sign In With Google{' '}
						</CustomButton>
					</div>
				</form>
			</SignInContainer>

			<GlassModal
				show={modal}
				close={showModal}
				titleBG='Alert!'
				title={error}
				content='Please verify the information is correct.'
			/>
		</Fragment>
	)
}

export default SignIn
