import { createSelector } from "reselect";
// import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectDescriptions = (state) => state.shop.productDescriptions;

export const selectProduct = (state) => state.shop.product;

export const selectCategories = createSelector(
  [selectShop],
  (shop) => shop.categories
);

export const selectCategoriesForPreview = createSelector(
  [selectCategories],
  (categories) =>
    categories ? Object.keys(categories).map((key) => categories[key]) : []
);

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectCategories], (categories) =>
    categories ? categories[categoryUrlParam] : null
  );

// Reduce and return the categories array
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
