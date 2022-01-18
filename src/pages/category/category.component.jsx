import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CategoryItem from '../../components/category-item/category-item.component';
import AnimatedPage from '../../components/animated-page/animated-page.component'

const Category = ({ collection }) => {
    const { title, items } = collection;
    
    return (
        <AnimatedPage>
            <div className="collection-page">
                <h2 className='title'>{ title }</h2>
                <div className="items">
                    {
                        items.map(item => <CategoryItem key={ item.id } item={ item } />)
                    }
                </div>
            </div>
        </AnimatedPage>
    );
};

const mapStateToProps = (state, ownProps ) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
 
export default connect(mapStateToProps)(Category);
              