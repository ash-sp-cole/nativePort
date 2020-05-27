import React, { Component } from 'react'
import { Icon,Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


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
          as={Link} to="/about"
        >
          <Icon name='code'/>
          About me
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link} to="/"
        >
          <Icon name='home' />
          
        </Menu.Item>

        <Menu.Item
          name='book'
          active={activeItem === 'book'}
          onClick={this.handleItemClick}
          as={Link} to='/projects'
        >
          <Icon name='book' />
          Projects
        </Menu.Item>
      </Menu>
    )
  }
}
