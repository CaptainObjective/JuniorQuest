import React from 'react';
// import './Drawer.css';
import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

class Drawer extends React.Component {
  state = { visible: false };

  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  componentDidMount () {
      console.log("Drawer props:")
      console.log(document.cookie)
  }
  
  render() {
    // const { visible } = this.state

    return (
      <>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="right"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={this.props.drawer}
            width='thin'
          > <Menu.Item >
              <img src='https://www.flaticon.com/premium-icon/icons/svg/1146/1146325.svg' style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto'}} />
          </Menu.Item>
            <Menu.Item>
              Email:  {this.props.props.email}
            </Menu.Item>
            <Menu.Item>
              Imię: {this.props.props.fullName}
            </Menu.Item>
            <Menu.Item>
              Mentor: Yoda Mistrz
            </Menu.Item>
            <Menu.Item>
              Kredyty: {this.props.props.gold}
            </Menu.Item>
            <Menu.Item>
              Doświadczenie: {this.props.props.exp}
            </Menu.Item>
            <Menu.Item onClick={this.props.logOut}>Log out</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment style={{ height: '100vh' }}>{this.props.children}</Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}

export default Drawer;
