import React, { useEffect, useState } from 'react'

import Categories from '../../components/categories/categories.component'

import Product from './product.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import NEW_ARRIVALS  from './new-arrivals.data.json'

import { Container } from './product.styles'

const CategoriesWithSpinner = WithSpinner(Categories)

const ProductsSection = () => {
	const collections = NEW_ARRIVALS

	const prod1 = collections[0]
	const prod2 = collections[1]
	const prod3 = collections[2]
    
	return (
		<>
			<Container className='container'>
				<Product
					className='productOne'
					name={prod1.name}
					price={prod1.price}
					imageUrl={prod1.imageUrl}
					item={prod1}
				/>

				<Product
					className='productTwo'
					name={prod2.name}
					price={prod2.price}
					imageUrl={prod2.imageUrl}
					item={prod2}
				/>

				<Product
					className='productThree'
					name={prod3.name}
					price={prod3.price}
					imageUrl={prod3.imageUrl}
					item={prod3}
				/>
			</Container>
		</>
	)
}

export default ProductsSection
