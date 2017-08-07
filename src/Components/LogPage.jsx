import React         from 'react'
import LoginForm     from './LoginForm'
import WelcomeHeader from './WelcomeHeader'

export default class LogPage extends React.Component{
  render(){
    return(
      <div className="ui middle aligned center aligned grid container">
        
        <WelcomeHeader />

        <LoginForm />
      </div>
    )
  }
}