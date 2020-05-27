

import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Flag, Button } from 'semantic-ui-react'

class SidebarExampleSidebar extends Component {

    state ={
        showSidebar:false

    }

        toggleSidebar = () =>{
            this.setState({
                showSidebar:true
            })
        }
        toggleOff = () =>{
            this.setState({
                showSidebar:false
            })
        }
    render (){
        

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='scale down'
        icon='labeled'
        inverted
        onHide={() => this.toggleOff()}
        vertical
        visible={this.state.showSidebar}
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          <Button onClick={this.toggleSidebar}> VIew </Button>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}
}

export default SidebarExampleSidebar