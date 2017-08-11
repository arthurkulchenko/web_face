import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import App from './App'

const RouteFile = () => (
  <main className="ui middle aligned center aligned grid container">
    <Switch>
      <Route exact path='/' component={Auth} />
      <Route path='/app' component={App} />
    </Switch>
  </main>
)

export default RouteFile