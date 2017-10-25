import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocaleHOC from './LocaleHOC';
import Avatar from './Avatar';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class Header extends Component {
    static propTypes = {
        locale: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "sai krishna",
                email: "saidaso@microsoft.com",
                avatar_url: "../../Images/user_icon.png"
            }
        }
    }
    render() {
        const { locale } = this.props;
        return (
            <div className="row header" >

                <img id="microsoft-logo" className="col-md-3" src={require('../../Images/microsoft-logo.png')} />
                <div className="col-md-6">
                    <h1>{locale.strings.HeaderName}</h1>
                </div>
                <div className="avatar-section col-md-1">
                    <Link to="/user">
                        <Avatar user={this.state.user} />
                    </Link>
                </div>
            </div>

        )
    }
}






export default LocaleHOC(Header);