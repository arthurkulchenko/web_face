import React            from 'react'
//import PropTypes        from 'prop-types'
import LoginForm        from './Auth/LoginForm'
import WelcomeHeader    from './Auth/WelcomeHeader'
import ModalWin         from '../ModalWin'

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      request: null,
      request_status: null,
      hasError: false
    })
    this.changeAuthStatus = this.changeAuthStatus.bind(this)

  }

  componentDidMount() {
    // console.log(this.props.history)
    // console.log(this.props)
  }

  changeAuthStatus(result){
    this.setState({request: result}, () => { 
                                             if (result.status === 200){
                                               this.props.history.push('/app')      // <------LOGINing
                                               // this.props.sessionUser = result
                                             }else if ( result.status === 404 ){
                                               this.setState(state =>({ ...state, hasError: true}))
                                               console.log('authentication failed')
                                             }else{
                                               this.setState(state =>({ ...state, hasError: true}))
                                               console.log(result.status)
                                             }
                                            }
    )
  }
  render(){
  	// const goes here
    // console.log("the prop hello is: " + this.props.route.hello)
    return(

      <div className="ui middle aligned center aligned grid container">
        <WelcomeHeader />
        <LoginForm onChange={this.changeAuthStatus}/>
        <ModalWin trigger={this.state.request}/>
      </div>
    )
  }
}
// Validatior
//Auth.contextTypes = {
//    history: React.PropTypes.object.isRequired
//};