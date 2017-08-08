import React         from 'react'
import LoginForm     from './Auth/LoginForm'
import WelcomeHeader from './Auth/WelcomeHeader'

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      request: null
    })
    this.changeAuthStatus = this.changeAuthStatus.bind(this)
  }
  changeAuthStatus(result){
    this.setState({
      request: result,
    }, () => { 
               console.log(result.status)
               console.log(result.data)
             }
    )
  }
  messagingToUserOrAuth(){
    // TODO
  }
  render(){
    return(
      <div className="ui middle aligned center aligned grid container">
        <WelcomeHeader />
        <LoginForm user={this.state.user} onChange={this.changeAuthStatus}/>
      </div>
    )
  }
}