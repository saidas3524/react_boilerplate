import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router} from'react-router';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getStore } from './getStore';
import Routes from './routes';
import App from './components/app';
import reducers from './reducers';
var ReactAI  = require('react-appinsights');
ReactAI.init({instrumentationKey:'cb845a63-5172-4e93-ab09-24f30f8987c6'});


const store = getStore();
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render((
    <Provider store={store}>
    <App/>
</Provider>
), document.querySelector('.root'));


