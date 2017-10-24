import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import './app.css';
import Locale from './common/Locale';



class App extends React.Component{
    
    constructor(props,context){
        super(props,context);
        this.locale = new Locale('enUs');
    }
    static childContextTypes={
        locale: PropTypes.object
    }


    state = {
        currentLocale:'enUs'
    }

    changeLocale=(locale)=>{
        this.setState({
            currentLocale:locale
        })
    }
    getChildContext(){
        return { locale:this.locale }
    }

    componentWillUpdate(nextProps,nextState){
        this.locale.setLanguage(nextState.currentLocale);
    }
    render(){
        return(
            <div>
                <Header/>
                <button onClick={()=>{this.changeLocale('enUs')}}>English-US</button>
                <button onClick={()=>{this.changeLocale('enUk')}}>English-UK</button>
                {/* <div className="alert alert-danger" role="alert">
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span className="sr-only">Error:</span>
                  Enter a valid email address
                </div>  */}

                <div className="space"></div>
                <Footer/>
            </div>
        );
    }
}


export default App;