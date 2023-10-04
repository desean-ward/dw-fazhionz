import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCategory } from "../../redux/shop/shop.selectors";

import CategoryItem from "../../components/category-item/category-item.component";
import AnimatedPage from "../../components/animated-page/animated-page.component";

const Category = () => {
  const category = useSelector(selectCategory);
  const { title, items } = category;

  return (
    <AnimatedPage>
      <div className='collection-page'>
        <div className='preview'>
          <h2 className='title'>{title}</h2>
          <div className='items'>
            {items.map((item) => (
              <CategoryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Category;
