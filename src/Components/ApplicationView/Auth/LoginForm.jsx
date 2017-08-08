import React from 'react'
import axios from 'axios';
import { newApiSessionAddress, registrationAddress, restorePasswordAddress } from '../../../Config/ApiConfig'
export default class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
                   request: null,
                   usersEmail: '',
                   usersPassword: '',
                 }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loggingIn = this.loggingIn.bind(this)
  }

  loggingIn(){
    axios({
            params:{
                    email: this.state.usersEmail,
                    password: this.state.usersPassword
                   },// IMPORTANT THAT PARAMS MUST BE FIRST
            method: 'post',
            url: newApiSessionAddress,
          }
         ).then(response => {this.props.onChange(response)})
          .catch(error => {this.props.onChange(error.response)})
  }
  
  handleEmailChange = e => {
    this.setState({usersEmail: e.target.value})
  }

  handlePasswordChange(e){
    this.setState({usersPassword: e.target.value})
  }

  render(){
    return(
      <div className="ui stackable very relaxed center aligned centred grid container">
        <div className="seven wide column">
          <form className="ui large form" action={newApiSessionAddress} method="post">

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
              <div 
                className="ui fluid large orange submit button"
                onClick={this.loggingIn}
              >
                Войти
              </div>
            </div>           
            <div className="ui error message"></div>
          </form>
          <div className="ui message">
            <a href={registrationAddress}>Я тут впервые.</a>
          </div>
  
         <div className="ui message">
           <a href={restorePasswordAddress}>Я не помню пароль, что делать?</a>
         </div>
        </div>
      </div>
    )
  }
}