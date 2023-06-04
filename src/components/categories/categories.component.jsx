import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import { createProductDescription } from '../../utils/openai/openai.utils'


import AnimatedPage from '../../components/animated-page/animated-page.component'
import Category from '../category/category.component'

import { CategoriesContext } from '../../context/categories.context'

import {
	ShopContainer,
} from './categories.styles'

import { addProductDescriptions } from '../../utils/firebase/firebase.utils'



// Selects the category according to the title (ex.: 'mens', 'women'...)
const Categories = ({ collections }) => {
	const { categoriesMap, productDescriptions } = useContext(CategoriesContext)
	const { title, items } = categoriesMap
	const [ descriptions, setDescriptions ] = useState([])

	useEffect(() => {
		
		const getDescription = async () => {
			try {
					const prodDescriptions = []
					await Promise.all(
						Object.keys(categoriesMap).map(async (title) => {
						  const items = categoriesMap[title];
			  
						  await Promise.all(
							items.map(async (item) => {
							  const desc = title.toLowerCase() + ' ' + item.name;
							  const description = await createProductDescription(desc);
							  prodDescriptions.push(description);
							})
						  );
						})
					  );
			  
					  setDescriptions(prodDescriptions);
				} catch (err) {
					console.log("There was an error fetching the description: " + err)
				}
				
			}
			getDescription()
			//addProductDescriptions(descriptions)
		
	}, [])

	useEffect(async () => {
		//await addProductDescriptions(descriptions)
		//descriptions.forEach(descr => console.log('PRODUCT DESCRIPTION: ' + JSON.stringify(descriptions)))
		//console.log("ITEMZZ: " + JSON.stringify(descriptions))
	}, [descriptions])

	return (
		<AnimatedPage>
			<ShopContainer>
				{Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title]

					return (<Category key={title} title={title} products={products} />)
				})}
			</ShopContainer>
		</AnimatedPage>
	)
}

// const mapStateToProps = createStructuredSelector({
// 	collections: selectCollectionsForPreview,
// })

// export default connect(mapStateToProps)(Categories)

export default Categories