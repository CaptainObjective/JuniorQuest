import React, { useState } from 'react';
import { Button, Header, Label, Segment } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const square = { width: 200, height: 200 };

const buy_item = gql`
  mutation($where: UserWhereUniqueInput!, $itemID: ID!) {
    updateUser(where: $where, data: { bought_items: { connect: { id: $itemID } } }) {
      id
      bought_items {
        id
      }
    }
  }
`;

const ItemToBuy = props => {
  console.log(props);
  const [buyItem, { data }] = useMutation(buy_item, {
    variables: {
      where: { id: props.me.id },
      itemID: props.id,
    },
  });

  const [state, setState] = useState({ message: 'Kup' });

  const onButtonClick = () => {
    buyItem();
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
