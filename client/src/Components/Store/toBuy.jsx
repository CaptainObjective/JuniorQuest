import React from 'react';
import ItemToBuy from './itemToBuy';

const toBuy = props => {
  const itemsToBuy = props.items.filter(e => {
    return e.bought === false;
  });

  return (
    <div>
      {itemsToBuy.map(e => (
        <ItemToBuy me={props.me} key={`toBuy-${e.name}`} {...e} />
      ))}
    </div>
  );
};

export default toBuy;
