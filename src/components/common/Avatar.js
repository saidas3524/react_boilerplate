import React from 'react';

import PropTypes from 'prop-types';


const Avatar = ({ user }) => {

    return (
        <div>
            {/* <label>Hi! {user.name}</label> */}
            <div className="avatar_div">

                <img id="avatar" src="https://mem.gfx.ms/me/MeControl/9.1.17292.1/msa_enabled.png" />
            </div>
        </div>
    )
}


export default Avatar;