import React from 'react';
import PropTypes from 'prop-types';

import LocaleHOC from './LocaleHOC';



class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languages :["English", "Spanish", "Dutch", "English  - UK", "French"]
        }
    }
    static propTypes = {
        locale:PropTypes.object
    }

    
    render() {
        const {locale}  = this.props;
        return (
            <div className="footer">
                
                <h1>Footer</h1>
                <p>{locale.strings.Footerpara}</p>
            </div>
        )
    }
}


export default LocaleHOC(Footer);