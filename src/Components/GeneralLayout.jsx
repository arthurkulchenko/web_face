import React from 'react'

export default class GeneralLayout extends React.Component{
  render(){
    return(
        <div className="ui stripe vertical segment">
          <div className="ui vertical stripe intro segment">
            <div className="ui stackable very relaxed center aligned grid container">
              <div className="row">
                <div className="twelve wide column">
                <h1 className="ui header">КРО</h1>
                  <p>Приложение для отчетов КРО</p>
               </div>
             </div>
           </div>
          </div>
        </div>
          
    )
  }
}