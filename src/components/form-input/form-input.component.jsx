import './form-input.styles.scss';
import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input'  onChange={handleChange} {...otherProps}/>
        {
            label ? 
            (<label className = {`${otherProps.value.lemgth ? 'shrink ' : '' }  form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export  default FormInput;