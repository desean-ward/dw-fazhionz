import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


const Directory = ({ sections }) => (

    <div className = 'directory-container'>
        <div className = 'directory-menu'>
            {/* Maps the sections, destructures, and returns the 'id' + the remaining props (...otherSectionProps) into the 'MenuItem' component*/}
            { sections.map(({ id, ...otherSectionProps }) => ( 
            <MenuItem key={ id } { ...otherSectionProps } />
            ))}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)




