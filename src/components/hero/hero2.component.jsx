import React from 'react'

//import videoBG from '../..                              /assets/hero-woman.mp4'

import './hero2.styles.scss'

const Hero = ()=> {
    return (
        <div className='video-container'>
            <div className='hero-title'>
                <h1>D.W. <span className='signature'>Fazhionz!</span></h1>
                <span className='hero-content'>We are a brand that aims to promote individuality through fashion. Our selection of apparel combines functional comfort with fashion-forward design, catering to a community of style-conscious individuals.
                </span>
            </div>

            <div className='overlay'>
                <div className='image-container'>
                
                    <img src='../../images/2-women-b.jpg' />
                </div>
           </div>
        </div>
    )
}

export default Hero