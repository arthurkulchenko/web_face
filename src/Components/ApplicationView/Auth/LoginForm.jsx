import React from 'react'
import { newApiSessionAddress, registrationAddress, restorePasswordAddress } from '../../../Config/ApiConfig'
import axios from 'axios';
export default class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      usersEmail: "",
      usersPassword: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loggingIn = this.loggingIn.bind(this)
  }

  loggingIn(){
    axios({
            params:{
                    email: this.state.usersEmail,
                    password: this.state.usersPassword
                   },
            method: 'post',
            url: newApiSessionAddress,
      }
    ).then(response => {
      const json = JSON.stringify(response.data)
      this.setState({user: json})
      return response.data
    }).catch((error) => {
      return error.data
    }) //.then(alert("Yo"))
  }
  
  handleEmailChange = e => {
    this.setState({
      usersEmail: e.target.value
      }, () => { 
                console.log(this.state.usersEmail)
                }
    )
  }

  handlePasswordChange(e){
    this.setState({
      usersPassword: e.target.value
    })
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