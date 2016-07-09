import 'core-js/fn/object/assign'; // What is this for?
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Article from './pages/Article'
import Gallery from './pages/Gallery'
import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Gallery}></IndexRoute>
            <Route path="articles(/:article)" name="articles" component={Article}></Route>
        </Route>
    </Router>
, app);
