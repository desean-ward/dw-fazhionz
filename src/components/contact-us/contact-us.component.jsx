import React, { useState, useEffect, useRef } from 'react'

import emailjs from 'emailjs-com'

import CustomButton from '../../components/custom-button/custom-button.component'
import GlassModal from '../glass-popup/glass-popup.component'

import {
	Container,
	LogoContainer,
	Title,
	Message,
	InputContainer,
	NameInput,
	EmailInput,
	SubjectInput,
	MessageInput,
	ButtonSend,
} from './contact-us.styles'

const Contact = () => {
	const [modal, setModal] = useState(false)

	const initialValues = { name: '', email: '', subject: '', message: '' }
	const [formValues, setFormValues] = useState(initialValues)
	const [isSubmit, setIsSubmit] = useState(false)

	const emailFormat =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		
	const name = document.querySelector('.name-input')
	const email = document.querySelector('.email-input')
	const subject = document.querySelector('.subject-input')
	const message = document.querySelector('.message-input')

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		validate(formValues) ? setIsSubmit(true) : setIsSubmit(false)
	}

	const showModal = () => {
		setModal(!modal)
		setFormValues(initialValues)

		if (modal) setIsSubmit(false)
	}

	useEffect(() => {
		setFormValues(initialValues)
 	}, [isSubmit])

	useEffect(() => {
		if (isSubmit) {
			sendEmail()
			showModal()
		}
	}, [isSubmit])

	const validate = (values) => {
		try {
			if (!values.name) {
				name.classList.add('highlight')
				name.focus()
			} else name.classList.remove('highlight')

			if (!values.email) {
				email.classList.add('highlight')
			} else if (values.email.match(emailFormat)) {
				email.classList.remove('highlight')
			} else email.focus()

			if (!values.subject) {
				subject.classList.add('highlight')
				subject.focus()
			} else subject.classList.remove('highlight')

			if (!values.message) {
				message.classList.add('highlight')
			} else message.classList.remove('highlight')
		} catch (err) {
			return
		}

		const fields = document.querySelectorAll('.highlight')

		try {
			if (fields && fields.length > 0) fields[0].focus()
			else return true
		} catch (err) {
			return false
		}
	}

	const form = useRef()

	const sendEmail = () => {
		emailjs
			.sendForm(
				'service_jhnvilg',
				'dw-fazhionz-contact-us',
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
		<Container>
			<LogoContainer>
				<img
					className='logo-images left'
					src='../../images/dw-fazhionz-bg-left.png'
					alt='Logo'
				/>

				<img
					className='burst'
					src='../../images/burst.png'
					alt='Logo'
				/>

				<img
					className='burst2'
					src='../../images/burst.png'
					alt='Logo'
				/>

				<img
					className='lines'
					src='../../images/dw-fazhionz-bg-lines.png'
					alt='Logo'
				/>

				<img
					className='logo-images right'
					src='../../images/dw-fazhionz-bg-right.png'
					alt='Logo'
				/>
			</LogoContainer>

			<Container className='input-container'>
				<Title className='title maroon'>CONTACT US</Title>
				<Message>We'd love to hear from you!</Message>
				<InputContainer
					ref={form}
					className='form'
					onSubmit={handleSubmit}
				>
					<NameInput
						name='name'
						type='text'
						className='input name-input'
						placeholder='Name'
						value={formValues.name}
						onChange={handleChange}
					/>

					<EmailInput
						name='email'
						type='email'
						className='input email-input'
						placeholder='Email (ex.: abc@1234.com)'
						value={formValues.email}
						onChange={handleChange}
					/>

					<SubjectInput
						name='subject'
						type='text'
						className='input subject-input'
						placeholder='Subject'
						value={formValues.subject}
						onChange={handleChange}
					/>

					<MessageInput
						name='message'
						type='text'
						className='input message-input'
						placeholder='Message'
						value={formValues.message}
						onChange={handleChange}
					/>

					<ButtonSend>
						<CustomButton type='submit'>Send</CustomButton>
					</ButtonSend>
				</InputContainer>
			</Container>

			<GlassModal
				show={modal}
				close={showModal}
				titleBG='D.W. Fazhionz'
				title='Thanks for reaching out!'
				content="You'll hear back from us shortly."
			/>
		</Container>
	)
}

export default Contact
