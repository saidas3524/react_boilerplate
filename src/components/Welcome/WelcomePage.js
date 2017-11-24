import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import LocaleHOC from '../common/LocaleHOC'
import { connect } from 'react-redux'

import {
    userInfoSelector, newsFeedSelector
} from './../../selectors'


class WelcomePage extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { locale } = this.props;
        var newsFeed = this.props.newsFeed;
        var user = this.props.user;
        if (user == null) {
            console.log(this);
            return (
                <div>
                    Loading...
                </div>);
        }
        return (
            <div>
                {user && <div>
                    <br />
                    <br />
                    <br />
                    <div className="row"><h1 className="col-xs-12">Hi {user.Name}!</h1></div>
                    <div className="row">
                        <h2 className="col-xs-12"></h2>
                        <p className="col-xs-12">{locale.strings.WelcomeMessage}<br />{locale.strings.WelcomeMessage2}</p>
                    </div>
                    <NewsFeed newsFeed={newsFeed} />
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    var user = userInfoSelector(state);
    var newsFeed = newsFeedSelector(state);
    // if(user != null)
    // {
    //     user = user.toJS();
    //     console.log("mapStateToProps: current user selector called :" + user);
    // }
    // if(newsFeed){
    //     newsFeed = newsFeed.toJS()
    // }

    user = user ? user.toJS() : user;
    newsFeed = newsFeed ? newsFeed.toJS() : newsFeed
    return {
        ...user,
        newsFeed,
        fetched: true
    }
};


export default connect(
    mapStateToProps
)(LocaleHOC(WelcomePage));

//export default LocaleHOC(WelcomePage);