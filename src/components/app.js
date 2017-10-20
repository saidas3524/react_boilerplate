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


                <div className="space"></div>
                <Footer/>
            </div>
        );
    }
}


export default App;