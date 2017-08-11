import React         from 'react'
import PropTypes     from 'prop-types'
import LoginForm     from './Auth/LoginForm'
import WelcomeHeader from './Auth/WelcomeHeader'
import ModalWin      from '../ModalWin'

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      request: null,
      request_status: null
    })
    this.changeAuthStatus = this.changeAuthStatus.bind(this)
  }

  changeAuthStatus(result){
    this.setState({request: result}, () => { 
                                             if (result.status === 200){
                                               this.props.history.push('/app')
                                             }else if ( result.status === 404 ){
                                               console.log('authentication failed')
                                             }else{
                                               console.log(result.status)
                                             }
                                            }
    )
  }
  render(){
  	// const goes here
    return(
      <div className="ui middle aligned center aligned grid container">
        
        <WelcomeHeader />
        <LoginForm onChange={this.changeAuthStatus}/>
        <ModalWin trigger={this.state.request}/>
      </div>
    )
  }
}
Auth.contextTypes = {
    router: React.PropTypes.object.isRequired
};