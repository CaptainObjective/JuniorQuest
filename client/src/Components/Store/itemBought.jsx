import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const square = { width: 200, height: 200 };

const ItemBought = props => {
  return (
    <Segment circular style={square}>
      <Header as="h4">
        <Header.Subheader>{props.icon}</Header.Subheader>
        {props.name}
      </Header>
    </Segment>
  );
};

export default ItemBought;
