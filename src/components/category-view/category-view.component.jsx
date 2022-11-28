import React, { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import CategoryItem from '../../components/category-item/category-item.component'

import { CategoriesContext } from '../../context/categories.context'

import { CategoryViewContainer, TitleContainer } from './category-view.styles.jsx'

const CategoryView = () => {
    const  { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [ products, setProducts ] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


  return (
      <Fragment>
        <TitleContainer>
            <h2 className='title'>{ category.toUpperCase() }</h2>
        </TitleContainer>

        <CategoryViewContainer>
            {   
                products && products.map((product) => <CategoryItem key={product.id} item={product} />)
            }
        </CategoryViewContainer>
    </Fragment>
  )
}

export default CategoryView