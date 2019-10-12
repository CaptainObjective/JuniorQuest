import React, { useState } from 'react';
import { Button, Header, Label, Segment, Popup } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const square = { width: 200, height: 200, border: '3px solid #54c8ff' };

const buy_item = gql`
  mutation($where: UserWhereUniqueInput!, $itemID: ID!, $gold: Int, $exp: Int) {
    updateUser(where: $where, data: { gold: $gold, exp: $exp, bought_items: { connect: { id: $itemID } } }) {
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
      gold: props.me.gold - props.price,
      exp: props.me.exp + 50,
    },
  });

  const [state, setState] = useState({ message: 'Kup' });

  const onButtonClick = () => {
    buyItem();
    setState({ message: 'Kupiono' });
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <Popup
        content={props.desctription}
        key={props.name}
        header={props.name}
        inverted
        position="right center"
        trigger={
          <Segment inverted circular style={square}>
            <Header as="h4">
              <Header.Subheader>
                <img src={props.icon} alt="ikona zadania" style={{ maxWidth: '75px' }} />
              </Header.Subheader>
              {props.name}
              <Header.Subheader>
                <Button as="div" labelPosition="right" onClick={onButtonClick} color="blue" name="quests">
                  <Button icon inverted color="blue" name="quests">{state.message}</Button>
                  <Label as="div" inverted basic pointing="left">
                    {props.price}
                  </Label>
                </Button>
              </Header.Subheader>
            </Header>
          </Segment>
        }
      />
    </div>
  );
};

export default ItemToBuy;
