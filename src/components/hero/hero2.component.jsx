import React from 'react'
import { AnimatePresence } from 'framer-motion' 

//import videoBG from '../..                              /assets/hero-woman.mp4'

//import './hero2.styles.scss'
import { HeroContainer, HeroContent, ImageContainer, HeroVerbiage, VerbiageBar, Sale, SaleImage, LinesContainer, Lines } from './hero2.styles'


const verbiageVariants = {
    initial: { opacity: 0, scale: 4} ,
    animate: { opacity: 1, scale: 1 },
}

const linesVariants = {
    initial: {  visibility: 'hidden' },
    animate: { visibility: 'visible' },
    enter: { visibility: 'hidden' }
}

const barVariants = {
    initial: { visibility: 'hidden', scaleX: 0 },
    animate: { visibility: 'visible', scaleX: 1 },
    enter: { visibility: 'hidden', scaleX: 0 }
}

const Hero = ()=> {
    return (
        <HeroContainer>
            <HeroContent>
                <>
                    <div className='background' />

                    <ImageContainer>
                        <img src='../../images/hero-bg.jpg' />
                    </ImageContainer>
                

                    <HeroVerbiage
                        variants={ verbiageVariants }
                        transition={{ duration: 0.5 }}
                    >
                        <VerbiageBar
                            variants={ barVariants }
                            transition={{ duration: .5, delay: .5 }}
                        >
                        D.W. FAZHIONZ *  D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ * D.W. FAZHIONZ
                        </VerbiageBar>

                        <div className='dwf fat-face'>
                            D.W. <span className='signature'>Fazhionz!</span>
                            {/* <p>We are a brand that aims to promote individuality through fashion. Our selection of apparel combines functional comfort with fashion-forward design, catering to a community of style-conscious individuals.
                            </p> */}
                        </div>

                        <Sale>
                            <SaleImage>
                                <img src='images/hero-15-off.gif' />
                            </SaleImage>
                        </Sale>
                    </HeroVerbiage>
                    
                    <AnimatePresence>
                        <LinesContainer
                        variants={ linesVariants }
                        transition={{ delay: 1 }}
                        >
                            <Lines>
                                <img src='images/hero-top-bg-lines.gif' />          
                            </Lines>
                        </LinesContainer>
                    </AnimatePresence>
                </>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero