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
                name: "Sai krishna Dasoju",
                email: "saidaso@microsoft.com",
                avatar_url: "../../Images/user_icon.png"
            }
        }
    }
    render() {
        const { locale } = this.props;
        return (
            <div className="row">
                <div className="col-xs-12 col-md-2">
                    <img className="c-logo" src="https://assets.onestore.ms/cdnfiles/external/uhf/long/9a49a7e9d8e881327e81b9eb43dabc01de70a9bb/images/microsoft-gray.png"/>
                    </div>
                <div className=" col-md-offset-2 col-md-6 col-xs-10">
                    <h3 style={{marginTop:"10px"}}>{locale.strings.HeaderName}</h3>
                </div>
                <div style={{float:'right'}} className="col-md-2 col-xs-2 ">
                    <Link to="/user">
                        <Avatar user={this.state.user} />
                    </Link>
                </div>
            </div>

        )
    }
}






export default LocaleHOC(Header);