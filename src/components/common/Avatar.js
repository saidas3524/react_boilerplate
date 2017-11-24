import React from 'react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Avatar = ({user, className}) => {

    return (
        <div className={className}>

            <button
                className="btn btn-default dropdown-toggle "
                type="button"
                id="avatar"
                data-toggle="dropdown">
                	<div className="glyphicon glyphicon-user">
			    	
				</div>
                {/* <img
                    class="dropdown-menu"
                    id="avatar"
                    src=""/> */}
                <span className="caret"></span>
            </button>

            <ul className="dropdown-menu" role="menu">
                <li>
                    <Link to="/user">
                        <span className="glyphicon glyphicon-user"></span> User Profile
                    </Link>
                </li>
                <li>
                <Link to="/logout">
                        <span className="glyphicon glyphicon-log-out"></span> Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Avatar;