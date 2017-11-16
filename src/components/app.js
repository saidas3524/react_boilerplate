import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import './app.css';
import Locale from './common/Locale';
import UserProfile from './User/UserProfile';
import WelcomePage from './Welcome/WelcomePage';
import {connect} from 'react-redux';
import {ActionBar} from '@ms-fw/fw-react'
import { getCurrentUserInfo } from '../actions'
import {
    BrowserRouter as Router, 
    Route,
    Link
} from 'react-router-dom'
import {NavigationContainer} from "./Navigation"

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import MSAL_Wrapper from "../api/msal_wrapper"

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.locale = new Locale('enUs');
    }

    componentWillMount() {
        setTimeout(function() { 
            console.log("user Name Inside:"+ MSAL_Wrapper.userName)     
          //  debugger;       
            this.props.getCurrentUserInfo();
            // if(MSAL_Wrapper.userName)
            // {
            //     this.props.getCurrentUserInfo();
            // }
            // else
            // {
            //     MSAL_Wrapper.loginRedirect();
                
            // }
            }.bind(this),
              1000);
        console.log("user Name :"+ MSAL_Wrapper.userName);
        
    
    }

    static childContextTypes = {
        locale: PropTypes.object
    }


    state = {
        currentLocale: 'enUs'
    }

    changeLocale = (locale) => {
        this.setState({
            currentLocale: locale
        })
    }
    getChildContext() {
        return { locale: this.locale }
    }

    componentWillUpdate(nextProps, nextState) {
        this.locale.setLanguage(nextState.currentLocale);
    }

    languageChanged = (language) => {
        this.changeLocale(language);
        this.locale.setLanguage(language);
    }
    render() {
        return (
            <Router>
                <div>
                    <header className="container-fluid">
                        <Header />
                    </header>
                    <NavigationContainer/>
                    <div style={{ minHeight: "1000px" }} className="container-fluid">
                        <Route path="/user" component={UserProfile} />
                        <Route exact path="/" component={WelcomePage} />
                    </div>
                    <footer className="container-fluid">
                        <Footer languageChanged={this.languageChanged} />
                    </footer>
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentUserInfo(){
        dispatch(getCurrentUserInfo('test'));
    }
});

export default connect(null, mapDispatchToProps)(App);