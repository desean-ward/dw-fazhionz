import React from "react";
import { useSelector } from "react-redux";

// Keep commented out ---- For AI Descriptions
// import { createProductDescription } from "../../utils/openai/openai.utils";

// Keep commented out ---- For AI Descriptions
// import { addProductDescriptions } from "../../utils/firebase/firebase.utils";

import AnimatedPage from "../../components/animated-page/animated-page.component";
import Category from "../category/category.component";

import { ShopContainer } from "./categories.styles";

import { selectCategoriesMap } from "../../redux/shop/shop.selectors";

// Selects the category according to the title (ex.: 'mens', 'women'...)
const Categories = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  //* Keep commented out ---- For AI Description Creation
  // useEffect(() => {
  //   const getDescription = async () => {
  //     try {
  //       const prodDescriptions = [];
  //       await Promise.all(
  //         Object.keys(categoriesMap).map(async (title) => {
  //           const items = categoriesMap[title];

  //           await Promise.all(
  //             items.map(async (item) => {
  //               const desc = title.toLowerCase() + " " + item.name;

  //               // Call to OpenAI for product description generation
  //               const description = await createProductDescription(desc);
  //               prodDescriptions.push(description);
  //             })
  //           );
  //         })
  //       );

  //       setDescriptions(prodDescriptions);
  //     } catch (err) {
  //       console.log("There was an error fetching the description: " + err);
  //     }
  //   };
  //   getDescription();

  //   // Add OpenAI descriptions to database - comment out after first run
  //   // addProductDescriptions(descriptions);
  // }, []);

  //! Commented out
  // ---- Original Call Add Product Descriptions to Database
  //   useEffect(() => {
  //     const addProducts = async () => {
  //       await addProductDescriptions(descriptions);
  //       descriptions.forEach((descr) =>
  //         console.log("PRODUCT DESCRIPTION: " + JSON.stringify(descriptions))
  //       );
  //     };
  //     addProducts();
  //   }, [descriptions]);

  return (
    <AnimatedPage>
      <ShopContainer>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return <Category key={title} title={title} products={products} />;
        })}
      </ShopContainer>
    </AnimatedPage>
  );
};

export default Categories;
