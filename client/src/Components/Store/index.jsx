import React, { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import ToBuy from './toBuy';
import Bought from './bought';

export const items = [
    {
        name: '15 minut dłuższa przerwa',
        icon: '🍉',
        description: '',
        price: 100,
        bought: false
    },
    {
        name: '1 dzień wolny',
        icon: '😃',
        description: '',
        price: 1000,
        bought: false
    },
    {
        name: 'Darmowa pizza',
        icon: '🍕',
        description: '',
        price: 200,
        bought: true
    }
];

const Store = () => {
  const [state, setState] = useState({ toBuyView: true, boughtView: false });

  const showToBuyBox = () => {
    setState({ toBuyView: true, boughtView: false });
  };

  const showBoughtBox = () => {
    setState({ toBuyView: false, boughtView: true });
  };

  return (
    <div className="container">
    <Segment>
      <Button onClick={showToBuyBox}>Do kupienia</Button>
      <Button onClick={showBoughtBox}>Kupione</Button>
    </Segment>
    <Segment>
      {state.toBuyView && <ToBuy items={items}/>}
      {state.boughtView && <Bought items={items}/>}
    </Segment>
  </div>
  );
}

export default Store;