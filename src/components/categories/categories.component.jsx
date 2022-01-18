import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';


import Category from '../category/category.component';

import './categories.styles.scss';

const Categories = ({ collections }) => {
    const { title, items } = collections;
    return(
        <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionsProps}) => (
                <Category key={id} {...otherCollectionsProps} />
            ))
        }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview

})

export default connect(mapStateToProps)(Categories);