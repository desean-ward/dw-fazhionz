import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'

import AnimatedPage from '../../components/animated-page/animated-page.component'
import Category from '../category/category.component'

import { CategoriesContext } from '../../context/categories.context'

import {
	ShopContainer,
} from './categories.styles'

// Selects the category according to the title (ex.: 'mens', 'women'...)
const Categories = ({ collections }) => {
	const { categoriesMap } = useContext(CategoriesContext)

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

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(Categories)
