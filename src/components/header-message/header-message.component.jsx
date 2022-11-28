import React, { useRef, useEffect, useState, useContext } from 'react'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { db, auth } from '../../utils/firebase/firebase.utils'
import { doc, getDoc } from 'firebase/firestore'


import { UserContext } from '../../context/user.context.jsx'

import { IconContext } from 'react-icons'

import {
	Left,
	Center,
	Right,
	HeaderMessageContainer,
} from './header-message.styles'

const HeaderMessage = () => {
	const initialState = 'Hello'
	const [ name, setName ] = useState(initialState)
	const [ nameUpdated, setNameUpdated ] = useState(false)
	const { currentUser } = useContext(UserContext)

	const getCurrentUser = () => {
		if (!currentUser) return

		console.log("HEADER: " + currentUser.displayName)
		
		/* if (nameUpdated == false) {
			setName(currentUser.displayName)
			setNameUpdated(true)
		} */

		setName(currentUser.displayName)

	}

	useEffect(() => {
		function updateName() {
			getCurrentUser()
		}

		 return updateName()
	}, [currentUser]) 

	

	

	return (
		<HeaderMessageContainer>
			<IconContext.Provider value={{ color: '' }}>
				<Left>Modern Apparel For Modern Mindz</Left>

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

export default HeaderMessage
