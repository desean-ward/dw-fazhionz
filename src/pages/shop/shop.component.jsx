import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux'

import Categories from "../../components/categories/categories.component";
import Category from "../category/category.component";
import AnimatedPage from '../../components/animated-page/animated-page.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import "./shop.styles.scss";
class ShopPage extends React.Component {
     unsubscribeFromSnapshot = null;

     componentDidMount() {
          const { updateCollections } = this.props;
          const collectionRef = firestore.collection('collections');

          this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
               const collectionsMap = convertCollectionsSnapshotToMap(snapshot); 
               updateCollections(collectionsMap);   
          })
     }

    render() {
         const { match } = this. props;

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
    }
};

const mapDispatchToProps = dispatch => ({
     updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
