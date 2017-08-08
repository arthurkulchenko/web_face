import React from 'react'

// import { LogPage, authenticatedUser, authenticationError } from './Components/LogPage'
import LogPage from './Components/LogPage'
import Form from './Components/TestingComponent'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default class Gasket extends React.Component{
  function _ensureAuthenticated(nextState, replace, callback) {
  //   const { dispatch } = store 
  //   const { session } = store.getState()
  //   const { currentUser } = session

  //   if (!currentUser && localStorage.getItem('token')) {
  //     dispatch(getCurrentAccount())
  //   } else if (!localStorage.getItem('token')) {
  //     replace('/signin')
  //   }

  //   callback()
    }
    return (
            // <Router>
            // <LogPage />
            // </Router>
            /*
            if authenticationDone?{
              return <AuthenApp />
            }
            else{
              return <LogPage />
            }

            */
            <Route component={App}>
              <Route path='/signin' component={LogPage} />
              // <Route path='/signup' component={SignupContainer} />
              // <Route path='/' component={AuthenticatedApp} onEnter={_ensureAuthenticated}>
              <Route path='/' component={PrivateCabinet} onEnter={_ensureAuthenticated}>
                // <Route component={ReportContainer}>
                //   <Route path='/activities' component={ActivitiesContainer} />
                //   <Route path='/activities/:id' component={CaptionsContainer} />
                // </Route>
              </Route>
            </Route>
    );
  
}