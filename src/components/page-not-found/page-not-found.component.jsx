import React from 'react'

import AnimatedPage from '../animated-page/animated-page.component'

import { Wrapper, Overlay, Content } from './page-not-found.styles'

const PageNotFound = () => {
	return (
		<AnimatedPage>
			<Wrapper>
				<Overlay>
					<Content>
						404
						<br />
						Page Not Found
					</Content>
				</Overlay>
			</Wrapper>
		</AnimatedPage>
	)
}

export default PageNotFound
