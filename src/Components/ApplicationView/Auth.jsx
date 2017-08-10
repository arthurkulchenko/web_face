import React         from 'react'
import LoginForm     from './Auth/LoginForm'
import WelcomeHeader from './Auth/WelcomeHeader'
import ModalWin      from '../ModalWin'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      request: null
    })
    this.changeAuthStatus = this.changeAuthStatus.bind(this)
  }
  
  changeAuthStatus(result){
    this.setState({
      request: result,

    }, () => { 
               // if (result.status === 200){
               // // }else if(result.status === 200){
               // //   //TODO page redirect
               //   var obj = document.getElementsByClassName('modal')
               //   alert(obj[0])
               //   obj[0].modalShow
                 
               // //   // $('.ui.modal').modal('show')
               // //   this.runModalWin
               // // }else{
               // //   alert(result)
               // }
               // console.log(result.status)
               // console.log(result.data)
             }
    )
  }
  render(){
  	// const goes here
    return(
      <div className="ui middle aligned center aligned grid container">
        
        <WelcomeHeader />
        <LoginForm onChange={this.changeAuthStatus}/>
        <ModalWin trigger={this.state.request}/>
      </div>
    )
  }
}