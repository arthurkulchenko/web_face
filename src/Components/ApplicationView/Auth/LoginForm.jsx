import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { newApiSessionAddress, registrationAddress, restorePasswordAddress } from '../../../Config/ApiConfig'
import RegistrationForm from './RegistrationForm'

var Person = (email, password) => {
    this.email = email;
    this.password = password;
}

export default class LoginForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = { 
                   request: null,
                   usersEmail: '',
                   usersPassword: '',
                 }
    this.handleEmailChange        = this.handleEmailChange.bind(this)
    this.handlePasswordChange     = this.handlePasswordChange.bind(this)
    this.loggingIn                = this.loggingIn.bind(this)
  }

  loggingIn(){
    // var user = Person(this.state.usersEmail, this.state.usersPassword)
    // console.log("user is comming")
    // console.log(user)
    // user.email = this.state.usersEmail
    // user.password = this.state.usersPassword
    axios.post(newApiSessionAddress+`?user[email]=${this.state.usersEmail}&user[password]=${this.state.usersPassword}`
    // axios({
      // IMPORTANT THAT PARAMS MUST BE FIRST
            //user[email]=mail@mail.com&user[password]=123456
            //Parameters: {"user"=>{"email"=>"mail@mail.com", "password"=>"[FILTERED]"}}

            // params:{ 
                     // user

                    // user: {
                      // email: this.state.usersEmail,
                      // password: this.state.usersPassword
                    // }
                   // },
            //Parameters: {"user"=>"{\"email\":\"mail@mail.com\",\"password\":\"123456\"}"}
            // method: 'post',
            // url: newApiSessionAddress,
          // }
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
      <div className="ui stackable very relaxed middle aligned center aligned grid container">
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
          <Link to="/new_member">Я тут впервые</Link>
          <br/>
          <Link to="/restore_my_password">Я не помню пароль, что делать?</Link>
  
        </div>
      </div>
    )
  }
}