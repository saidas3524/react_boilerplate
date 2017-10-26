import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import './app.css';
import Locale from './common/Locale';
import UserProfile from './User/UserProfile';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.locale = new Locale('enUs');
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

    languageChanged = (language)=>{
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
                    <div style={{height:"840px"}} className="container-fluid">
                    <Route path="/user" component={UserProfile} />
                    </div>
                    <footer className="container-fluid">
                        <Footer languageChanged = {this.languageChanged}/>
                    </footer>
                </div>
            </Router>
        );
    }
}


export default App;