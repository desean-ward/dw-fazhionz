import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

import AnimatedPage from "../animated-page/animated-page.component";

import {
  CategoryViewContainer,
  TitleContainer,
} from "./category-view.styles.jsx";

const CategoryItem = lazy(() =>
  import("../category-item/category-item.component")
);

//* This page displays the indiviual category after clicking 'View All' on the 'categories' page
const CategoryView = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <AnimatedPage>
      <CategoryViewContainer>
        <div className='category-view'>
          <div className='category-content'>
            <TitleContainer>
              <h3 className='title'>{category.toUpperCase()}</h3>
            </TitleContainer>
            {products &&
              products.map((product) => (
                <Suspense key={product.id}>
                  <CategoryItem
                    className='item'
                    key={product.id}
                    item={product}
                    title={category}
                  />
                </Suspense>
              ))}
          </div>
        </div>
      </CategoryViewContainer>
    </AnimatedPage>
  );
};

export default CategoryView;
