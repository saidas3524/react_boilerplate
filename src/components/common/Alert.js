import React from 'react';
import PropTypes from 'prop-types';


const Alert = ({status,message})=>{
    let wrapperClass = 'alert alert-dismissible';
    if(status =="FAILED" || status== "INVALID")
        wrapperClass +=" "+'alert-danger';
    else
        wrapperClass +=" "+'alert-success';
    return(
        <div className={wrapperClass} role="alert ">{message}</div>
    )    
}

export default Alert;