import React from 'react';

import PropTypes from'prop-types';


const Avatar = ({user})=>{
  
    return(
        <div>
            <img id="avatar" src={require('../../Images/user_icon.png')} />
        </div>
    )
}


export default Avatar;