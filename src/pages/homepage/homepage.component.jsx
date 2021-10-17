import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import Directory from '../../components/directory/directory.component';

/* Create a functional component 'HomePage' (does not store lifecycle methods or state) */
const HomePage = () => (
    <div className = 'homepage'>
       <Directory />
    </div>
);

export default HomePage;