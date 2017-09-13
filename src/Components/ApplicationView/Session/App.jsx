import React from 'react'
import UserShow from './App/UserShow'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = ({session_token: null})
  }
  render(){
    return(
      <UserShow />
    )
  }
}