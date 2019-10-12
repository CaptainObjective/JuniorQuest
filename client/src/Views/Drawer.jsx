import React from 'react';
// import './Drawer.css';
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

class Drawer extends React.Component {
    state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  componentDidMount () {
      console.log("error")
      console.log(this.props.children)
  }

  render() {
    const { visible } = this.state

    return (
        <>
            <Button icon>
                <Icon name='align justify' disabled={visible} onClick={this.handleShowClick} />
            </Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='very wide'
          > <Menu.Item >
              Avatar {this.props.avatar}
          </Menu.Item>
            <Menu.Item>
              Name {this.props.name}
            </Menu.Item>
            <Menu.Item>
              Mentor: {this.props.mentor}
            </Menu.Item>
            <Menu.Item>
              Gold: {this.props.gold}
            </Menu.Item>
            <Menu.Item>
              Level: {this.props.level}
            </Menu.Item>
            <Menu.Item>
              Log out
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment >
                {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    )
  }
}

export default Drawer