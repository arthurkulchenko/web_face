import React from 'react'
import RegistrationForm from './RegistrationForm'

export default class RegistrationFeedBack extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      request: '',
      hasError: null
    }
    this.handleRegScenario = this.handleRegScenario.bind(this)
  }
  handleRegScenario(result){
    this.setState({request: result}, () => { 
                                             if (result.status === 200){
                                               this.props.history.push('/')      // <------LOGINing
                                               // this.props.sessionUser = result
                                             }else if ( result.status === 404 ){
                                               this.setState(state =>({ ...state, hasError: true}))
                                               console.log('registration failed')
                                             }else{
                                               this.setState(state =>({ ...state, hasError: true}))
                                               console.log(result.status)
                                             }
                                            }
    )
  }
  render(){
    return(
      <RegistrationForm onChange={this.handleRegScenario} />
    )
  }
}