import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

// import CategoryItem from "../category-item/category-item.component.jsx";

import {
  CategoryContainer,
  PreviewContainer,
  TitleContainer,
  ProductsContainer,
} from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux/shop/shop.selectors.js";
import { nanoid } from "nanoid";
import { PropagateLoader } from "react-spinners";
import Suspend from "../suspend/suspend.component";

const CategoryItem = lazy(() =>
  import("../category-item/category-item.component.jsx")
);

const Category = ({ title }) => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const products = categoriesMap[title];

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
              <Suspend key={nanoid()}>
                <CategoryItem
                  key={nanoid()}
                  item={product}
                  title={title}
                  id={product.id}
                />
              </Suspend>
            ))}
        </ProductsContainer>
      </PreviewContainer>
    </CategoryContainer>
  );
};

export default Category;
