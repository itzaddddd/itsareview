import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './Redux/Reducers';
const myStore = createStore(reducers);
const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(
    <Provider store={myStore}>
        <AppWithRouter />
    </Provider>
    ,document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
