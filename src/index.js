import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';

import './index.css';

import { Router, Route, browserHistory } from 'react-router'

import getComponentAbout from './pages/about/route'
import getComponentHome from './pages/home/route'
import getComponentNoMatch from './pages/no-match/route'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/home" getComponent={getComponentHome} />
            <Route path="/about" getComponent={getComponentAbout} />
            <Route path="*" getComponent={getComponentNoMatch} />
        </Route>
    </Router>
    ,
    document.getElementById('root')
);


