import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const square = { width: 200, height: 200 };

const ItemBought = props => {
  return (
    <div style={{display: 'inline-block', margin: '5px'}}>
      <Segment circular style={square}>
        <Header as="h4">
          <Header.Subheader><img src={props.icon} alt='ikona zadania' style={{maxWidth: '75px'}} /></Header.Subheader>
          {props.name}
        </Header>
      </Segment>
    </div>
  );
};

export default ItemBought;
