import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import LocaleHOC from '../common/LocaleHOC'
import { connect } from 'react-redux'

import {
    currentUserSelector
} from './../../selectors'


class WelcomePage extends Component {

    constructor(props) {
        super(props);       
    }
    render() {
        const { locale } = this.props;
        var user= this.props.user;
        if(user == null)
        {
            console.log(this);
            return(
            <div>
                Loading... 
                </div>);
        }
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div className="row"><h1 className="col-xs-12">Hi {user.name}!</h1></div>
                <div className="row">
                    <h2 className="col-xs-12"></h2>
                    <p className="col-xs-12">{locale.strings.WelcomeMessage}<br/>{locale.strings.WelcomeMessage2}</p>
                </div>
                <div className="row">
                    <h3 className="col-xs-12">News and Alerts</h3>
                    <NewsFeed newsFeed={user.newsFeed} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const user = currentUserSelector(state);
    if(user != null)
    {
    console.log("mapStateToProps: current user selector called :" + user.toJS());
    }
    
    return user ? {
        ...user.toJS(),
        fetched:true
    } : {
        fetched:false
    }
};


export default connect(
    mapStateToProps
)(LocaleHOC(WelcomePage));

//export default LocaleHOC(WelcomePage);