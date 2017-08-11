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
            })
    }else{
    }
  }
  render(){
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