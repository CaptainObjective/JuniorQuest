import React, { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ToBuy from './toBuy';
import Bought from './bought';

export const items = [
  {
    name: '15 minut dłuższa przerwa',
    icon: '🍉',
    description: '',
    price: 100,
    bought: false,
  },
  {
    name: '1 dzień wolny',
    icon: '😃',
    description: '',
    price: 1000,
    bought: false,
  },
  {
    name: 'Darmowa pizza',
    icon: '🍕',
    description: '',
    price: 200,
    bought: true,
  },
];

const get_store_items = gql`
  {
    storeItems {
      id
      name
      desctription
      price
      icon
    }
    me {
      id
      bought_items {
        id
      }
    }
  }
`;

const Store = () => {
  const { data, loading, error } = useQuery(get_store_items);

  const [state, setState] = useState({ toBuyView: true, boughtView: false });

  const showToBuyBox = () => {
    setState({ toBuyView: true, boughtView: false });
  };

  const showBoughtBox = () => {
    setState({ toBuyView: false, boughtView: true });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  data.storeItems = data.storeItems.map(el => ({ ...el, bought: data.me.bought_items.some(({ id }) => id === el.id) }));
  return (
    <div className="container">
      <Segment>
        <Button onClick={showToBuyBox}>Do kupienia</Button>
        <Button onClick={showBoughtBox}>Kupione</Button>
      </Segment>
      <Segment>
        {state.toBuyView && <ToBuy me={data.me} items={data.storeItems} />}
        {state.boughtView && <Bought me={data.me} items={data.storeItems} />}
      </Segment>
    </div>
  );
};

export default Store;
