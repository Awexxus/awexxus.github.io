import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import  { createStore, applyMiddleware } from 'redux'
import Reducer from './reducer'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker()
