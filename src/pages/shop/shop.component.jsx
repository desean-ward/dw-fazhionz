import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux'

import Categories from "../../components/categories/categories.component";
import Category from "../category/category.component";
import AnimatedPage from '../../components/animated-page/animated-page.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import "./shop.styles.scss";


const CategoriesWithSpinner = WithSpinner(Categories)
const CategoryWithSpinner = WithSpinner(Category)
class ShopPage extends React.Component {
     state = {
          loading: true
     }

     unsubscribeFromSnapshot = null;

     componentDidMount() {
          const { updateCollections } = this.props;
          const collectionRef = firestore.collection('collections');

          this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
               const collectionsMap = convertCollectionsSnapshotToMap(snapshot); 
               updateCollections(collectionsMap); 
               this.setState({ loading: false })  
          })
     }

    render() {
         const { match } = this. props;
         const { loading } = this.state

         return (
               <div className="shop-page">
                    <AnimatedPage>
                         <Route
                              exact
                              path={`${match.path}`}
                              render={props => (
                                   <CategoriesWithSpinner isLoading={loading} { ...props } />
                              )}
                         />
                    </AnimatedPage>

                    <AnimatedPage>
                         <Route
                              path={`${match.path}/:collectionId`}
                              render={props => (
                                   <CategoryWithSpinner isLoading={loading} { ...props } />
                              )}
                         />
                    </AnimatedPage>
               </div>
          );
    }
};

const mapDispatchToProps = dispatch => ({
     updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
