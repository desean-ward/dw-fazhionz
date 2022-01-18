import React from "react";
import { Route } from "react-router-dom";

import Categories from "../../components/categories/categories.component";
import Category from "../category/category.component";
import AnimatedPage from '../../components/animated-page/animated-page.component'


import "./shop.styles.scss";

const ShopPage = ({ match }) => {
     return (
          <div className="shop-page">
               <AnimatedPage>
                    <Route
                         exact
                         path={`${match.path}`}
                         component={Categories}
                    />
               </AnimatedPage>

               <AnimatedPage>
                    <Route
                         path={`${match.path}/:collectionId`}
                         component={Category}
                    />
               </AnimatedPage>
          </div>
     );
};

export default ShopPage;
