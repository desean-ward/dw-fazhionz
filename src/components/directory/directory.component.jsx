import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer, DirectoryMenu } from './directory.styles'


const Directory = ({ sections }) => (

    <DirectoryContainer>
        <DirectoryMenu>
            {/* Maps the sections, destructures, and returns the 'id' + the remaining props (...otherSectionProps) into the 'MenuItem' component*/}
            { sections.map(({ id, ...otherSectionProps }) => ( 
            <MenuItem key={ id } { ...otherSectionProps } />
            ))}
        </DirectoryMenu>
    </DirectoryContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)




