import React from 'react'

import Auth from '../Components/ApplicationView/Auth'
// import LogPage from '../Components/Auth/LogPage'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default class ApplicationView extends React.Component{
  render(){
    return(
      <Auth />
      // <LogPage />
    )
  }
  // empty() {
    // function ensureAuthenticated(nextState, replace, callback) {
  //   const { dispatch } = store 
  //   const { session } = store.getState()
  //   const { currentUser } = session

  //   if (!currentUser && localStorage.getItem('token')) {
  //     dispatch(getCurrentAccount())
  //   } else if (!localStorage.getItem('token')) {
  //     replace('/signin')
  //   }

  //   callback()
    // return (
            
            // <Route component={App}>
              // <Route path='/signin' component={LogPage} />
              // <Route path='/signup' component={SignupContainer} />
              // <Route path='/' component={AuthenticatedApp} onEnter={_ensureAuthenticated}>
              // <Route path='/' component={PrivateCabinet} onEnter={_ensureAuthenticated}>
                // <Route component={ReportContainer}>
                //   <Route path='/activities' component={ActivitiesContainer} />
                //   <Route path='/activities/:id' component={CaptionsContainer} />
                // </Route>
              // </Route>
            // </Route>
    // )
  // }
  
}