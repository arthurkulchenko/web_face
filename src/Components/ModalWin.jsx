import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class ModalWin extends React.Component{
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showModal(){this.setState({ open: true })}
  closeModal(){this.setState({ open: false })}
  //---------------------------------------------------------------------------------
  componentWillReceiveProps(nextProps) {
    if (nextProps.trigger.status === 404){
      this.setState({ open: true }, () =>{
            })
    }else{
    }
  }
  //---------------------------------------------------------------------------------
  render(){
    return(
            <Modal open={this.state.open} basic size='small'>
              <Header icon='lock' content='Неверный пароль или Email' />
              <Modal.Content>
                <p>Если Вы забыли свой пароль нажмите на</p>
                <Link to="/restore_my_password">Я не помню свой пароль</Link>
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