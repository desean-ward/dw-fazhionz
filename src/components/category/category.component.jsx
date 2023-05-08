import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import CategoryItem from '../category-item/category-item.component.jsx'

import { CategoriesContext } from '../../context/categories.context'

import { CategoryContainer, PreviewContainer, TitleContainer, ProductsContainer } from './category.styles'


const Category = ({ title, products }) => {
	const url = '/shop/categories/' + title

	return (
		<CategoryContainer name='category-container'>
		

			<PreviewContainer name='preview-container'>
			

				<ProductsContainer name='products-container'>
					<TitleContainer name='title-container'>
						<h3 className='title'>
							<span>{title.toUpperCase()}</span>
						</h3>
						<Link to={title} className='view-all title'>View All</Link>
					</TitleContainer>
					{products
						.filter((_, idx) => idx < 4)
						.map((product) => (
							<CategoryItem key={product.id} item={product} />
					))}
					</ProductsContainer>
			</PreviewContainer>
		</CategoryContainer>
	)
}

export default Category
