import React from 'react'

export default class WelcomeHeader extends React.Component{
  render(){
    return(
      
      <div className="ui stripe center aligned bottom aligned vertical grid container">
            <div className="twelve wide column">
            <h1 className="ui header">КРО</h1>
              <p>Приложение для отчетов КРО</p>
           </div>
      </div>
    )
  }
}