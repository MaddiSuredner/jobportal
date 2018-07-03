import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';

import './css/bootstrap.min.css';
import './css/App.css';
import './index.css';

import combineReducers from "./reducers/combineReducers";

const rootNode = document.getElementById('root');
const spaStore = createStore(combineReducers,applyMiddleware(thunk));
ReactDOM.render(<Provider store={spaStore}>
	<Router><App /></Router>
	</Provider>, rootNode);
