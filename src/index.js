import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import * as Routes from './routes';

import './static/scss/main.scss';

var container = document.getElementById('container');

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Routes.Home} />
      <Route path="/register" component={Routes.Register} />
      <Route path="/login" component={Routes.Login} />
      <Route component={Routes.Error404} />
    </Switch>
  </HashRouter>
), container);
