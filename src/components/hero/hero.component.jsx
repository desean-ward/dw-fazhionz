import React from 'react'

import { LogoContainer} from './hero.styles.jsx'

const Hero = () => {
	return (
		<>
			<LogoContainer>
				<img
					className='logo'
					src='../../images/dw-fazhionz.png'
					alt='Logo'
				/>
				<img
					className='logo-images'
					src='../../images/dw-fazhionz-bg-img.png'
					alt='Logo'
				/>
			</LogoContainer>
		</>
	)
}

export default Hero
