import React, { useEffect } from 'react'
import ReactDom from 'react-dom'

import { IoClose } from 'react-icons/io5'

import {
	CloseBtn,
	Container,
	Content,
	Modal,
	Title,
	TitleBG,
} from './glass-popup.styles'

const GlassModal = ({ show, close, titleBG, title, content }) => {
	useEffect(() => {
		if (show) {
			const fadeIn = document.querySelector('.modalContainer')
			fadeIn.classList.add('show')
			
			return
		}
	}, [show])

	function handleClose() {
		const fadeIn = document.querySelector('.modalContainer')
		fadeIn.classList.remove('show')

    // Return close property to parent
		setTimeout(() => {
			close()
		}, 500)
	}

	return ReactDom.createPortal(
		<>
			{show ? (
				<Container
					className='modalContainer'
					onClick={() => handleClose()}>
					<Modal
						className='popup'
						onClick={(e) => e.stopPropagation()}>
            
            <IoClose className='exit' onClick={() => handleClose()} />
           
						<TitleBG>{titleBG}</TitleBG>
						<Title>{title}</Title>
						<Content>{content}</Content>
						
					</Modal>
				</Container>
			) : null}
		</>,
		document.getElementById('modal')
	)
}

export default GlassModal
