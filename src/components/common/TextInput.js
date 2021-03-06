import React from 'react';
import PropTypes from 'prop-types';


const TextInput = ({name,label,onChange,placeholder,value,error,readonly}) => {


    let wrapperClass = 'form-group';
    if(error)
        wrapperClass +=" "+'has-error'; 

    return(
            <div className={wrapperClass}>
               {label && <label htmlFor={name}>{label}</label>}
                <div>
                    <input type="text" name={name} className="form-control" readOnly={readonly} placeholder={placeholder} value={value} onChange={onChange}/>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label : PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value:PropTypes.string,
    error:PropTypes.string
}

export default TextInput;