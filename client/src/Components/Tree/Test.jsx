import React, { useState } from 'react';
import QuestTree from './QuestTree';
import QuestModal from '../Modals/QuestModal';
import { Icon } from 'semantic-ui-react';

const baseVideo = (
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/sBws8MSXN7A"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);

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
          <div style={{ textAlign: 'center', marginBottom: '2%' }}>{node.content || baseVideo}</div>
          <div style={{ textAlign: 'left' }}>
            <p>{node.description}</p>
          </div>
          <div style={{ textAlign: 'center', margin: '2%', fontSize: '1.5em' }}>
            <p>
              Nagroda: {node.gold} <Icon name="bitcoin" size="large"></Icon>
            </p>
          </div>
        </QuestModal>
      )}
    </React.Fragment>
  );
};

export default TreeTest;
