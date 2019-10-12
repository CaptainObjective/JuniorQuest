import React from 'react';
import { Header, Segment, Popup } from 'semantic-ui-react';

const square = { width: 200, height: 200, border: '3px solid #54c8ff'};

const ItemBought = props => {
  return (
    <div style={{ display: 'inline-block', margin: '5px' }}>
      <Popup
        content={props.desctription}
        key={props.name}
        header={props.name}
        inverted
        position="right center"
        trigger={
          <Segment inverted circular style={square} className="blured">
            <Header as="h4">
              <Header.Subheader>
                <img src={props.icon} alt="ikona zadania" style={{ maxWidth: '75px' }} />
              </Header.Subheader>
              {props.name}
            </Header>
          </Segment>
        }
      />
    </div>
  );
};

export default ItemBought;
