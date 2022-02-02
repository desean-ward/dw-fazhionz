import React from 'react'

import { LogoContainer} from './hero.styles.jsx'

const Hero = () => {
	return (
		<>
			<LogoContainer>
				<img
					className='logo-images left'
					src='../../images/dw-fazhionz-bg-left.png'
					alt='Logo'
				/>

				<img
					className='logo'
					src='../../images/dw-fazhionz1.png'
					alt='Logo'
				/>

				<img
					className='logo-images right'
					src='../../images/dw-fazhionz-bg-right.png'
					alt='Logo'
				/>
			</LogoContainer>
		</>
	)
}

export default Hero
