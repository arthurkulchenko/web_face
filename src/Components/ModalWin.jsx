// export default class ModalWin extends React.Component{

//   render(){
//     return(
//             <div className="ui basic modal" >
//               <div className="ui icon header">
//                 <i className="lock icon"></i>
//                 Неверный пароль или Email
//               </div>
//               <div className="content">
//                 <p>Если Вы забыли свой пароль нажмите на "Я не помню свой пароль".</p>
//               </div>
//               <div className="actions">
//               {
//               //   // <div className="ui red basic cancel inverted button">
//               //   //   <i className="remove icon"></i>
//               //   //   No
//               //   // </div>
//               }
//                 <div className="ui green ok inverted button">
//                   <i className="privacy icon"></i>
//                   Ясно
//                 </div>
//               </div>
//             </div>
//     )
//   }
// }
import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalWin extends React.Component{
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showModal(){this.setState({ open: true })}
  closeModal(){this.setState({ open: false })}
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.trigger.status === 404){
      this.setState({ open: true }, () =>{
              // debugger
            })
    }
  }
  render(){
    // const { open, dimmer } = this.state
    return(
            <Modal open={this.state.open} basic size='small'>
              <Header icon='lock' content='Неверный пароль или Email' />
              <Modal.Content>
                <p>Если Вы забыли свой пароль нажмите на "Я не помню свой пароль".</p>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' inverted onClick={this.closeModal}>
                  <Icon name='checkmark' /> Ясно
                </Button>
              </Modal.Actions>
            </Modal>
    )
  }
}