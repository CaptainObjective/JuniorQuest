import React from 'react';
// import './Drawer.css';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';

class Drawer extends React.Component {
  state = { visible: false };

  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  // componentDidMount () {
  //     console.log("Drawer props:")
  //     console.log(this.props)
  // }

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
            width="very wide"
          >
            <Menu.Item>Avatar {this.props.avatar}</Menu.Item>
            <Menu.Item>Email: {this.props.props.email}</Menu.Item>
            <Menu.Item>Name: {this.props.props.fullName}</Menu.Item>
            <Menu.Item>Mentor: {this.props.props.mentor ? this.props.props.mentor.fullName : ''}</Menu.Item>
            <Menu.Item>Gold: {this.props.props.gold}</Menu.Item>
            <Menu.Item>Level: {this.props.level}</Menu.Item>
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
