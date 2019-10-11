import React, { useState } from 'react';
import { Button, Header, Label, Segment } from 'semantic-ui-react';

const square = { width: 200, height: 200 };

const ItemToBuy = props => {
  const [state, setState] = useState({ message: 'Kup' });

  const onButtonClick = () => {
    setState({ message: 'Kupiono' });
  };

  return (
    <Segment circular style={square}>
      <Header as="h4">
        <Header.Subheader>{props.icon}</Header.Subheader>
        {props.name}
        <Header.Subheader>
          <Button as="div" labelPosition="right" onClick={onButtonClick}>
            <Button icon>{state.message}</Button>
            <Label as="div" basic pointing="left">
              {props.price}
            </Label>
          </Button>
        </Header.Subheader>
      </Header>
    </Segment>
  );
};

export default ItemToBuy;
