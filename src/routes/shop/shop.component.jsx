import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Categories from "../../components/categories/categories.component";
import Category from "../category/category.component";
import CategoryView from "../../components/category-view/category-view.component";
import AnimatedPage from "../../components/animated-page/animated-page.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  getCategoriesAndDocuments,
  getProductDescriptions,
} from "../../utils/firebase/firebase.utils";

import {
  setCategories,
  setProductDescriptions,
} from "../../redux/shop/shop.actions";

import { ShopContainer } from "./shop.styles.jsx";

// const CategoriesWithSpinner = WithSpinner(Categories);
// const CategoryWithSpinner = WithSpinner(Category);

const ShopPage = ({ updatedCollections }) => {
  const dispatch = useDispatch();

  // Retrieve the Products and Product Descriptions from the database
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    const getProductDescription = async () => {
      // Retrieve the product descriptions from the database
      const descriptions = await getProductDescriptions();

      // Dispatch the descriptions to state
      dispatch(setProductDescriptions(descriptions));
    };

    getCategoriesMap();
    getProductDescription();
  }, [dispatch]);

  return (
    <ShopContainer>
      <AnimatedPage>
        <Routes>
          <Route index element={<Categories />} />
          <Route path=':category' element={<CategoryView />} />
        </Routes>
      </AnimatedPage>
    </ShopContainer>
  );
};

export default ShopPage;
