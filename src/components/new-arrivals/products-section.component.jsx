import React, { useEffect, useState, useRef } from 'react'

import { motion, useViewportScroll, useTransform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Categories from '../../components/categories/categories.component'

import Product from './product.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import NEW_ARRIVALS from './new-arrivals.data.json'

import { Container } from './product.styles'

const CategoriesWithSpinner = WithSpinner(Categories)



const ProductsSection = () => {
	const controls = useAnimation()
	const [ref, inView] = useInView()
	const { scrollY } = useViewportScroll()
	const yOffset = useTransform(scrollY, [200, 400], [100, 0])
	
	const cardVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: yOffset },
		exit: { opacity: 0, y: 100 }
	}
	

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		} else {
			controls.start('exit')
		}
	}, [controls, inView])

	const collections = NEW_ARRIVALS

	return (
		<>	
			<Container className='container'>
					{collections.map((prod, index) => (
						<motion.div
							ref={ref}
							key={index}
							animate={controls}
							initial='hidden'
							variants={cardVariants}
							exit='exit'
							transition={{ duration: 1, delay: index * 0.3 }}
						>

							<Product
								key={prod.id}
								className='productOne'
								name={prod.name}
								price={prod.price}
								imageUrl={prod.imageUrl}
								item={prod}
							/>
						</motion.div>
					))}
			</Container>
		</>
	)
}

export default ProductsSection
