import 'babel-polyfill';
import React  from 'react'
import ReactDom from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions'
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDom.render(
  <Provider store = {store}>
    <Router history = {browserHistory} routes = {routes}/>
  </Provider>,
  document.getElementById('app')
);
