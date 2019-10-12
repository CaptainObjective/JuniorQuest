import React, { useState } from 'react';
import QuestTree from './QuestTree';
import QuestModal from '../Modals/QuestModal';

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
      <QuestModal {...{ isModalOpen, onClose, onFinish }}>
        <p>Text</p>
      </QuestModal>
    </React.Fragment>
  );
};

export default TreeTest;
