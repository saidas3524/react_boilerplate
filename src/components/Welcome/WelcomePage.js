import React, { Component } from 'react';
import NewsFeed from './NewsFeed';

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
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div className="row"><h1 className="col-xs-12">Hi {this.state.user.name}!</h1></div>
                <div className="row">
                    <h2 className="col-xs-12"></h2>
                    <p className="col-xs-12">From this HOme page you can access the specific Microsoft OEm Operations applications you use for your job function . Just select an application from one of the fucntional areas listed in the menu.<br />
                        You can also view current notifications in the News and Information area below. if you need help you can contact us
                </p>
                </div>
                <div className="row">
                    <h3 className="col-xs-12">News and Alerts</h3>
                    <NewsFeed newsFeed={this.state.user.newsFeed} />
                </div>
            </div>
        );
    }
}

export default WelcomePage;