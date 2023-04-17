import React, { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'

import GlassModal from '../glass-popup/glass-popup.component'

import {
	Container,
	Title,
	Description,
	InputContainer,
	Input,
	Button,
} from './newsletter.styles'

import { MdSend } from 'react-icons/md'

const Newsletter = () => {
	const [modal, setModal] = useState(false)
	const initialValue = ''
	const [formValue, setFormValue] = useState(initialValue)
	const [isSubmit, setIsSubmit] = useState(false)
	const email = document.querySelector('.email-input')

	const emailFormat =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const handleChange = (e) => {
		setFormValue(e.target.value)
		console.log(formValue)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// Validate the email format before submitting via useEffect
		validate(formValue) ? setIsSubmit(true) : setIsSubmit(false)
	}

	const showModal = () => {
		setModal(!modal)
		setFormValue(initialValue)

		if (modal) setIsSubmit(false)
	}

	useEffect(() => {
		// Submit the email and show confirmation modal/popup
		if (isSubmit) {
			sendEmail()
			showModal()
		}
	}, [isSubmit])

	const validate = (value) => {
		if (value.match(emailFormat)) {
			return true
		}
	}

	const form = useRef()

	const sendEmail = () => {
		emailjs
			.sendForm(
				'service_jhnvilg',
				'dw-fazhionz-newsletter',
				form.current,
				'user_E2SDLaiMBuyQ2WLk4t4Vg'
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}


	return (
		<>
			<Container>
				<div className='content'>
					<Title>Newsletter</Title>
					<Description>
						Subscribe to receive updates on deals and new arrivals
					</Description>

					<InputContainer
						ref={form}
						className='form'
						onSubmit={handleSubmit}>
						<Input
							name='email'
							className='email-input'
							type='email'
							placeholder='Your email'
							value={formValue}
							onChange={handleChange}
						/>

						<Button type='submit'>
							<MdSend />
						</Button>
					</InputContainer>
				</div>
			</Container>

			<GlassModal
				show={modal}
				close={showModal}
				titleBG='D.W. Fazhionz'
				title="You're now subscribed!"
				content='Please watch your inbox for weekly deals.'
			/>
		</>
	)
}

export default Newsletter
