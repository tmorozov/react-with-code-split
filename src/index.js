import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';

import './index.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/home" getComponent={(location, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./pages/home').default);
                });
            }} />
            <Route path="/about" getComponent={(location, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./pages/about').default);
                });
            }} />
            <Route path="*" getComponent={(location, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./pages/no-match').default);
                });
            }} />
        </Route>
    </Router>
    ,
    document.getElementById('root')
);


