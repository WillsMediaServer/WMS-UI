import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import * as Routes from './routes';

import './static/scss/main.scss';

const container = document.getElementById('container');

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Routes.Home} />
          <Route path="/register" component={Routes.Register} />
          <Route path="/login" component={Routes.Login} />
          <Route exact path="/music" component={Routes.Music} />
          <Route exact path="/music/song/:id" component={Routes.PlaySong} />
          <Route component={Routes.Error404} />
        </Switch>
        <Route path="/music" component={Routes.MusicPlayer} />
      </React.Fragment>
    )
  }
}

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), container);
