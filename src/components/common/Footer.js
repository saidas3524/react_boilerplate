import React from 'react';
import PropTypes from 'prop-types';
import Temp from './Temp';
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

    shouldComponentUpdate(){
        return false;
    }
    render() {
        const {locale}  = this.props;
        return (
            <div className="footer">
                <Temp/>
                <h1>{locale.strings.FooterName}</h1>
                <p>{locale.strings.Footerpara}</p>
            </div>
        )
    }
}


export default LocaleHOC(Footer);