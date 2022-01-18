import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { IconContext } from 'react-icons'

import {
	Left,
	Center,
	Right,
	HeaderMessageContainer,
} from './header-message.styles'

const HeaderMessage = ({ currentUser }) => {
	const initialState = 'Hello'
	const [ name, setName ] = useState(initialState)
	const [ nameUpdated, setNameUpdated ] = useState(false)

	const getCurrentUser = () => {
		
		if (!currentUser) return

		if (nameUpdated == false) {
			setName(currentUser.displayName)
			setNameUpdated(true)
		}
	}

	const getMessage = () => {
		//getCurrentUser()
		//setName(currentUser.displayName)
		return 'Welcome, {currentUser.displayName}!'
	}

	useEffect(() => {
		function handleName() {
			getCurrentUser()
		}

		handleName()
	}, [currentUser]) 


	return (
		<HeaderMessageContainer>
			<IconContext.Provider value={{ color: '' }}>
				<Left></Left>

				<Center>YOUR 1-STOP FAZHION SHOP!!!</Center>

				<Right>
					{currentUser ? 
						<div>Welcome, {name}!</div>
					 : 
						<span>Please Sign In Or Sign Up</span>
					}
				</Right>
			</IconContext.Provider>
		</HeaderMessageContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(HeaderMessage)
