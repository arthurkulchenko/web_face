import React from 'react'
import { Link } from 'react-router-dom'
import Facilities from './Facilities'

export default class UserShow extends React.Component{
  render(){
    return(
           <div className="ui stripe center aligned center aligned vertical grid container">
              <div className="twelve wide column">
                <h1 className="ui header">You are Logged in! Our Congratulations! Well done!</h1>
                <Link to='/'>Login Page</Link>
              </div>
              <Facilities />
            </div>
            
    )
  }
}