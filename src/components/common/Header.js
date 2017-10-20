import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocaleHOC from './LocaleHOC';



class Header extends Component {
    static propTypes = {
        locale:PropTypes.object
    }
    render() {
        const {locale}  = this.props;
        return (
            <div className="header">
                <h1>{locale.strings.HeaderName}</h1>
                <p>{locale.strings.Headerpara}</p>
            </div>
        )
    }
}






export default LocaleHOC(Header);