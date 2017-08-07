import React from 'react'

export default class LoginForm extends React.Component{
  render(){
    return(
      <div className="ui stackable very relaxed center aligned centred grid container">
        <div className="seven wide column">
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address">
                  </input>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password">
                  </input>
                </div>
              </div>
              <div className="ui fluid large orange submit button">Войти</div>
            </div>           
            <div className="ui error message"></div>
          </form>
  
          <div className="ui message">
            <a href="#">Я тут впервые, хочу пройти регистрацию.</a>
          </div>
  
         <div className="ui message">
           <a href="#">Я не помню пароль, что делать?</a>
         </div>
        </div>
      </div>
    )
  }
}