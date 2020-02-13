import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { WiredButton, WiredInput } from "wired-elements"

import Navigation from './components/Navigation'
import Home from './routes/Home'
import Game from './routes/Game'
import Result from './routes/Result'
import About from './routes/About'
import Sample from './routes/Sample'

export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/happy_birthday_mao/" component={Home}/>
        <Route path="/happy_birthday_mao/game" component={Game}/>
        <Route path="/happy_birthday_mao/result" component={Result}/>
      </Switch>
    </Router>
  </Fragment>
)
