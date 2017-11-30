import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable'
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'

import { getQuery } from './utility'
import { initSagas } from './initSagas';
import { reducer } from './combineReducers';
import { defaultState } from './defaultState';
import {insightsMonitor} from "./AppInsights";

const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
};

const logger = createLogger({
    stateTransformer,
});

export const getStore = ()=>{
    const sagaMiddleware = createSagaMiddleware();
    const params = {
        globals: {
          env: 'dev'
        },
        exclude: ['trackAction']
      };
    // const insightsMonitor = insightsMonitor();
    const middleWares = [insightsMonitor(params),sagaMiddleware,thunk];
    if (getQuery()['logger']) { middleWares.push(logger)}
    const composables = [applyMiddleware(...middleWares)
    //    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ];
    const enhancer = compose(
        ... composables
    );
    const store = createStore(
        reducer,
        defaultState,
        enhancer,
    );
    initSagas(sagaMiddleware);
    return store;
};