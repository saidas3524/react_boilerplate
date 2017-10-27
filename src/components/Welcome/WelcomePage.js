import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import LocaleHOC from '../common/LocaleHOC'

class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Sai Krishna Dasoju",
                newsFeed: [
                    {
                        Id: "1",
                        title: "Microsoft Hikes",
                        message: "test message test message test messagetest message test messagetest message test messagetest message test message test message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test message",

                    },
                    {
                        Id: "2",
                        title: "Microsoft Hike3s",
                        message: "test test message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagemessage test message test messagetest message test messagetest message test messagetest message test message",

                    },
                    {
                        Id: "3",
                        title: "Microsoft Hike4s",
                        message: "test message testtest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test message message test messagetest message test messagetest message test messagetest message test message",

                    }

                ]
            }
        };
    }
    render() {
        const { locale } = this.props;
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div className="row"><h1 className="col-xs-12">Hi {this.state.user.name}!</h1></div>
                <div className="row">
                    <h2 className="col-xs-12"></h2>
                    <p className="col-xs-12">{locale.strings.WelcomeMessage}<br/>{locale.strings.WelcomeMessage2}</p>
                </div>
                <div className="row">
                    <h3 className="col-xs-12">News and Alerts</h3>
                    <NewsFeed newsFeed={this.state.user.newsFeed} />
                </div>
            </div>
        );
    }
}

export default LocaleHOC(WelcomePage);