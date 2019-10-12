import React, { useState } from 'react';
import QuestTree from './QuestTree';
import QuestModal from '../Modals/QuestModal';
import { Icon } from 'semantic-ui-react';

const TreeTest = props => {
  const [modalData, setModalData] = useState({ isModalOpen: false });
  const { isModalOpen, node } = modalData;
  const onClose = () => {
    setModalData({ isModalOpen: false });
    document.querySelector(`[data-testid="${node.id}"]`).click();
  };
  const onFinish = () => {
    setModalData({ isModalOpen: false });
    console.log('Success');
  };

  return (
    <React.Fragment>
      <QuestTree
        onNodeSelection={node => {
          setModalData({ node, isModalOpen: true });
        }}
      />
      {node && (
        <QuestModal {...{ isModalOpen, onClose, onFinish, header: node.title }}>
          <p>{node.description}</p>
          <p>
            Nagroda: {node.gold} <Icon name="bitcoin" size="large"></Icon>
          </p>
        </QuestModal>
      )}
    </React.Fragment>
  );
};

export default TreeTest;
