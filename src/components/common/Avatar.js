import React from 'react';

import PropTypes from 'prop-types';


const Avatar = ({ user,className }) => {

    return (
        <div className={className}>
            <img id="avatar" src="https://mem.gfx.ms/me/MeControl/9.1.17292.1/msa_enabled.png" />
        </div>
    )
}


export default Avatar;