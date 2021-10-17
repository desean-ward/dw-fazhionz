import React from 'react';

import './form-input.styles.scss';

/* Functional Component. No State Needed */
/* Destructure FormInput Component */
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={ handleChange } { ...otherProps } />

        {/* Generates a label if one is passed,
        otherwise, render nothing */}
        {
            label ?
            (<label
                /* Interpolate string value otherProps and apply class of 'shrink'
                    Otherwise, it will be a value of an empty string. */
                className={ `${otherProps.value.length ? 'shrink' : '' } form-input-label`}>
            
                {/* Render the label text */}
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;