import React, { useEffect, useState } from 'react'

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Categories from '../../components/categories/categories.component'

import Product from './product.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import NEW_ARRIVALS  from './new-arrivals.data.json'

import { Container } from './product.styles'

const CategoriesWithSpinner = WithSpinner(Categories)


const parentVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 1, duration: 1} },
    exit: { opacity: 0, transition: { staggerChildren: 1, duration: 1 } }
}

const ProductsSection = () => {
	const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        } else {
            controls.start("exit");
        }
    }, [controls, inView]);

	const collections = NEW_ARRIVALS

	return (
		<>
			<Container 
				className='container'
				ref={ref}
                animate={controls}
                initial="hidden"
                variants={parentVariants}
                exit="exit"

			>
				{collections.map((prod, i) => (
					<Product
						key={prod.id}
						className='productOne'
						name={prod.name}
						price={prod.price}
						imageUrl={prod.imageUrl}
						item={prod}
					/>
				))}

			</Container>
		</>
	)
}

export default ProductsSection
