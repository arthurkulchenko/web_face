import React from 'react'
import axios from 'axios'
import { registrationAddress } from '../../../Config/ApiConfig'

export default class RegistrationForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      usersEmail: '',
      usersName: '',
      usersPassword: '',
      usersPasswordConfirmation: ''
    }
    this.handleEmailChange                = this.handleEmailChange.bind(this)
    this.handleNameChange                 = this.handleNameChange.bind(this)
    this.handlePasswordChange             = this.handlePasswordChange.bind(this)
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this)

  }
  registrateMe(){
    axios({
            params:{
                    email: this.state.usersEmail,
                    name: this.state.usersName,
                    password: this.state.usersPassword,
                    password_confirmation: this.state.usersPasswordConfirmation
                   },// IMPORTANT THAT PARAMS MUST BE FIRST
            method: 'post',
            url: registrationAddress,
          }
         ).then(response => {this.props.onChange(response)})
          .catch(error => {this.props.onChange(error.response)})
  }
  handleEmailChange(e){
    this.setState({usersEmail: e.target.value})
  }
  handleNameChange(e){
    this.setState({usersName: e.target.value})
  }
  handlePasswordChange(e){
    this.setState({usersPassword: e.target.value})
  }
  handlePasswordConfirmationChange(e){
    this.setState({usersPasswordConfirmation: e.target.value})
  }
  render(){
    return(
      <div className="ui stackable very relaxed center aligned centred grid container">
        <div className="seven wide column">
          <form className="ui large form" action={registrationAddress} method="post">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input 
                      type="text" 
                      name="email"
                      placeholder="E-mail address"
                      onChange={this.handleEmailChange}
                   />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input 
                      type="text" 
                      name="name"
                      placeholder="Your name please"
                      onChange={this.handleNameChange}
                   />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input 
                      type="password" 
                      name="password" 
                      placeholder="Password"
                      onChange={this.handlePasswordChange}
                   >
                  </input>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input 
                      type="password" 
                      name="password_confirmation" 
                      placeholder="Password confirmation"
                      onChange={this.handlePasswordConfirmationChange}
                   >
                  </input>
                </div>
              </div>
              <div
                className="ui fluid large orange submit button"
                onClick={this.registrateMe}
              >
                "Это Я, зарегистрируй меня."
              </div>
            </div>
            <div className="ui error message"></div>
          </form>
        </div>
      </div>
    )
  }
}