// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import {Router} from'react-router';
// import {BrowserRouter} from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { getStore } from './getStore';

// import Routes from './routes';

//
// import reducers from './reducers';


// const store = getStore();
// const createStoreWithMiddleware = applyMiddleware()(createStore);


// ReactDOM.render((
//     <Provider store={store}>
//     <App/>
// </Provider>
// ), document.querySelector('.root'));

import Alert from './components/common/Alert';
export {Alert};

import App from './components/app';
export {App} ;

export { getStore } from './getStore';
export {Routes} from './routes';
export {reducers} from './reducers';


import {NavigationContainer} from "./components/Navigation";
export {NavigationContainer} ;

import MSAL_Wrapper from "./api/msal_wrapper";
export {MSAL_Wrapper} ;

import Header from './components/common/Header';
export {Header} ;

import Footer from './components/common/Footer';
export {Footer} ;

import {TrackedComponent,ReactAI} from "./AppInsights"
export {TrackedComponent,ReactAI} ;

import {Locale} from './components/common/Locale';
export {Locale}

import {getUserInfo} from './actions'
export {getUserInfo}
