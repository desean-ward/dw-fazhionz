import React from 'react';
import { Link } from 'react-router-dom';

import CategoryItem from '../category-item/category-item.component.jsx';

import './category.styles.scss';

const Category = ({ title, items }) => {
    const url = "/shop/" + title.toLowerCase();


    return (
        <div className='collection-preview'>
            <h2 className='title'>
                { title.toUpperCase() } 

                <Link to={url} className='view-all'>View All</Link>
            </h2>


            <div className='preview'>
                {
                    /* Filter the array to display only 4 items */
                    items
                    .filter(( item, idx ) => idx < 4)
                    .map(item => (
                        <CategoryItem key={item.id} item={item} row/>
                    ))
                }
            </div>
        </div>
    )
};

export default Category;