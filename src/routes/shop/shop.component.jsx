import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { connect } from 'react-redux'

import Categories from "../../components/categories/categories.component";
import Category from "../category/category.component";
import CategoryView from '../../components/category-view/category-view.component'
import AnimatedPage from '../../components/animated-page/animated-page.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { CategoriesContext } from '../../context/categories.context'

import { db, convertCollectionsSnapshotToMap } from '../../utils/firebase/firebase.utils'
import { collection } from 'firebase/firestore'

import { updateCollections } from '../../redux/shop/shop.actions';

import { ShopContainer } from  "./shop.styles.jsx";


const CategoriesWithSpinner = WithSpinner(Categories)
const CategoryWithSpinner = WithSpinner(Category)

const ShopPage = ({ updatedCollections}) => {
     /* const [ loading, setLoading ] = useState(true)
     const navigate = useNavigate()
     //const { match } = useParams()
     const { categoriesMap } = useContext(CategoriesContext)

     useEffect(() => {
          const { updateCollections } = categoriesMap;
          console.log('CATEGORIES: ' + JSON.stringify(categoriesMap))
          const collectionRef = collection(db, 'collections');

          const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
               const collectionsMap = convertCollectionsSnapshotToMap(snapshot); 
               updateCollections(collectionsMap); 
               setLoading(false)
          })

          return unsubscribeFromSnapshot()

     }, []) */

  

         return (
               <ShopContainer>
                    <AnimatedPage>
                         <Routes>
                              <Route index element={<Categories />} />
                              <Route path=':category' element={<CategoryView />} />
                         </Routes>
                   
                         {/* <Routes>
                              <Route
                                   exact
                                   path='/shop'
                                   render={products => (
                                        <CategoriesWithSpinner isLoading={loading} { ...products } />
                                   )}
                              />
                         </Routes>
                    </AnimatedPage>

                    <AnimatedPage>
                         <Routes>
                              <Route
                                   path='/shop/:collectionId'
                                   render={products => (
                                        <CategoryWithSpinner isLoading={loading} { ...products } />
                                   )}
                              />
                                   </Routes> */}
                    </AnimatedPage>
               </ShopContainer>
          );
    
};

const mapDispatchToProps = dispatch => ({
     updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(mapDispatchToProps)(ShopPage)