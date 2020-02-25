import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [];

let state = 0;

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
    state = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middlewares) ) );
}else{
    state = createStore(rootReducer,applyMiddleware(...middlewares));
}

export const store = state;


export const persistor = persistStore(store);
// export default {store, persistor};