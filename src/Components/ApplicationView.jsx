import React from 'react'
import RouteFile from '../Components/ApplicationView/RouteFile'

import { BrowserRouter } from 'react-router-dom'

export default class ApplicationView extends React.Component{
  render(){
    return(
      // Every DIV beyond must be full size 100%
        <div id="application" className="ui middle aligned center aligned grid container">
          <BrowserRouter>
            <RouteFile />
          </BrowserRouter>
        </div>
    )
  }  
}