import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import App from './Session/App'
import Session from './Session'

export default class RouteFile extends React.Component{
  render(){
    return(
      <main className="ui middle aligned center aligned grid container">
        <Switch>
          <Route exact path='/' component={Auth} sessionUser={null} >
            <Route sessionUser={null} />
          </Route>
          <Route path='/app' component={Session} sessionUser={null} />
        </Switch>
      </main>
    )
  }
}

// export default RouteFile


// <Route path='/app' children={(props) => (
//   props.match
//     <Session sessionUser={}/>
// )}/>