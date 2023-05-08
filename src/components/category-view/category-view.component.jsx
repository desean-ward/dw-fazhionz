import React, { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import CategoryItem from '../../components/category-item/category-item.component'

import { CategoriesContext } from '../../context/categories.context'

import AnimatedPage from '../../components/animated-page/animated-page.component'

import { CategoryViewContainer, TitleContainer } from './category-view.styles.jsx'


// The page that displays the indiviual category after clicking 'View All' on the 'categories' page
const CategoryView = () => {
    const  { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [ products, setProducts ] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


  return (
      <AnimatedPage>
        <CategoryViewContainer>
        

        <div className='category-view'>
            <div className='category-content'>
                <TitleContainer>
                    <h3 className='title'>{ category.toUpperCase() }</h3>
                </TitleContainer> 
                {   
                    products && products.map((product) => <CategoryItem className='item' key={product.id} item={product} />)
                }
            </div>
        </div>
        </CategoryViewContainer>
    </AnimatedPage>
  )
}

export default CategoryView