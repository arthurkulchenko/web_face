import React from 'react'
import LoginForm     from './Auth/LoginForm'
import WelcomeHeader from './Auth/WelcomeHeader'

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      isAuthorized: false
    })
  }
  changeAuthStatus(ofUser){
    const user = JSON.parse(ofUser)
    const status = user ? true : false
    this.setState({
      isAuthorized: status
    }, () => { console.log("HI") }
    
    )
  }
  render(){
    return(
      <div className="ui middle aligned center aligned grid container">
        <WelcomeHeader />
        <LoginForm onChange={this.changeAuthStatus}/>
      </div>
    )
  }
}