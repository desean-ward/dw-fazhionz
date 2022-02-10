import React from 'react'

import { connect } from 'react-redux'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from "reselect";

import { Container } from './product.styles'
import './global-styles.css'
import Product from './product.component'


const ProductsSection = ({ collections }) => {
    
	const prod1 = collections[0].items[0]
	const prod2 = collections[1].items[0]
	const prod3 = collections[2].items[0]


    return (
        <>
            <Container className='container'>
                <Product
                    className='productOne'
                    name={prod1.name}
                    category={collections[0].title}
                    price={prod1.price}
                    imageUrl={prod1.imageUrl}
                    item={prod1}
                />
            
                <Product
                className='productTwo'
                name={prod2.name}
                category={collections[1].title}
                price={prod2.price}
                imageUrl={prod2.imageUrl}
                item={prod2}
                />
            
                <Product
                className='productThree'
                name={prod3.name}
                category={collections[2].title}
                price={prod3.price}
                imageUrl={prod3.imageUrl}
                item={prod3}
               /> 
            </Container>
        </>
    )
}



const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview

})

export default connect(mapStateToProps)(ProductsSection)
