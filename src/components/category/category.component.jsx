import React, { useState } from "react";
import { Link,  } from "react-router-dom";

import CategoryItem from "../category-item/category-item.component.jsx";

import {
  CategoryContainer,
  PreviewContainer,
  TitleContainer,
  ProductsContainer,
} from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux/shop/shop.selectors.js";

const Category = ({ title }) => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[title]);

  return (
    <CategoryContainer name='category-container'>
      <PreviewContainer name='preview-container'>
        <ProductsContainer name='products-container'>
          <TitleContainer name='title-container'>
            <h3 className='title'>{title.toUpperCase()}</h3>
            <Link to={title} className='view-all title'>
              View All
            </Link>
          </TitleContainer>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <CategoryItem
                key={product.id}
                item={product}
                title={title}
                id={product.id}
              />
            ))}
        </ProductsContainer>
      </PreviewContainer>
    </CategoryContainer>
  );
};

export default Category;
