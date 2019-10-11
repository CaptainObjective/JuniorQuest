import React, { useState } from 'react';
import QuestModal from './QuestModal';
import { Button } from 'semantic-ui-react';
import _ from 'lodash';

const ModalTest = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => {
    setIsModalOpen(false);
  };
  const onFinish = () => {
    setIsModalOpen(false);
    console.log('Success');
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Click
      </Button>
      <QuestModal {...{ isModalOpen, onClose, onFinish }}>
        {_.range(10).map(x => (
          <div key={x}>
            <p>Text</p> <br />
          </div>
        ))}
      </QuestModal>
    </React.Fragment>
  );
};

export default ModalTest;
