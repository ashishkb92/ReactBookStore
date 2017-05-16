import 'babel-polyfill';
import React  from 'react'
import ReactDom from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import configureStore from './store/configureStore'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDom.render(
  <Provider store = {store}>
    <Router history = {browserHistory} routes = {routes}/>
  </Provider>,
  document.getElementById('app')
);
