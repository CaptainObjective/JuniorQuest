import React from 'react';
import ItemBought from './itemBought';

const bought = props => {
  const itemsBought = props.items.filter(e => {
    return e.bought === true;
  });

  return (
    <div>
      {itemsBought.map(e => (
        <ItemBought key={`bought-${e.name}`} {...e} />
      ))}
    </div>
  );
};

export default bought;
