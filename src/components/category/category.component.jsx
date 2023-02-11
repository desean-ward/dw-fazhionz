import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import CategoryItem from '../category-item/category-item.component.jsx'

import { CategoriesContext } from '../../context/categories.context'

import { CategoryContainer, Preview } from './category.styles'


const Category = ({ title, products }) => {
	const url = '/shop/categories/' + title

	return (
		<CategoryContainer>
			<h2 className='title'>
				<span>{title.toUpperCase()}</span>
			</h2>
			<Link to={title} className='view-all'>View All</Link>

			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<CategoryItem key={product.id} item={product} />
					))}
			</Preview>
		</CategoryContainer>
	)
}

export default Category
