import React from 'react'

import videoBG from '../../assets/hero-woman.mp4'

import './hero2.styles.scss'

const Hero = ()=> {
    return (
        <div className='video-container'>
            <div className='overlay' />
            <video src={videoBG} autoPlay loop />
            <div className='hero-title'>
                <h1>Welcome to D.W. Fazhionz!</h1>
                <span className='hero-content'>We are a brand that aims to promote individuality through fashion, while also prioritizing sustainability and ethics in the industry. Their selection of fashion products combines functional comfort with fashion-forward design, catering to a community of style-conscious individuals.
                </span>
            </div>
        </div>
    )
}

export default Hero