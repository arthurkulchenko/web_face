import React from 'react'

export default class WelcomeHeader extends React.Component{
  render(){
    return(
            <div className="ui stripe bottom aligned center aligned vertical grid container">
              <div className="twelve wide column">
              <h1 className="ui header">КРО</h1>
                <p>Приложение для отчетов КРО</p>
              </div>
            </div>
    )
  }
}