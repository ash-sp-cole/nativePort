import React, { Component } from 'react'
import { Dropdown,Grid, Icon,Image,Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    
        <Menu icon='labeled' fluid widths={3} secondary>
        <Menu.Item
          name='code'
          active={activeItem === 'code'}
          onClick={this.handleItemClick}
        >
          <Icon name='code' />
          About me
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item
          name='book'
          active={activeItem === 'book'}
          onClick={this.handleItemClick}
        >
          <Icon name='book' />
          Projects
        </Menu.Item>
      </Menu>
    )
  }
}
