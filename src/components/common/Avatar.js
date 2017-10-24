import React from 'react';

import PropTypes from'prop-types';


const Avatar = ({user})=>{
  
    return(
        <div>
            <img id="avatar" src={require('../../Images/user_icon.png')} />
            {/* <span style={{marginLeft:"9%"}} className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span> */}
        </div>
    )
}


export default Avatar;