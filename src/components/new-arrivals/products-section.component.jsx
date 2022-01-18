import React from 'react'
import { Container } from './product.styles'
import './global-styles.css'
import Product from './product.component'


const ProductsSection = () => {
    return (
        <>
            <Container className='container'>
                <Product
                    className='productOne'
                    name='Brown Brim'
                    category='Hats'
                    price='25'
                    imgUrl='https://i.ibb.co/ZYW3VTp/brown-brim.png'
                />
            
                <Product
                className='productTwo'
                name='Adidas NMD'
                category='Sneakers'
                price='220'
                imgUrl='https://i.ibb.co/0s3pdnc/adidas-nmd.png'
                />
            
                <Product
                className='productThree'
                name='Black Jean Shearling'
                category='Jackets'
                price='125'
                imgUrl='https://i.ibb.co/XzcwL5s/black-shearling.png'
               /> 
            </Container>
        </>
    )
}

export default ProductsSection
