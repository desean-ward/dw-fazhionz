import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

/* Functional Component and destructure the props using {} */
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
    /* Interpolate 'size' of any menu-items containing the 'size' property */
        className = { ` ${size} menu-item` }
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        
        <div 
            /* Interpolate the imageUrl */
            className='background-image'  style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
    <div className = 'content'>
        <h1 className = 'title'>{ title.toUpperCase() }</h1>
        <span className = 'subtitle'>SHOP NOW</span>
    </div>
</div>

)

/* Export modified MenuItem */
export default withRouter(MenuItem);