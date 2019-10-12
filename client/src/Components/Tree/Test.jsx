import React, { useState } from 'react';
import QuestTree from './QuestTree';
import QuestModal from '../Modals/QuestModal';
import { Icon } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { me } from '../../App';

const add_gold = gql`
  mutation addGold($where: UserWhereUniqueInput!, $goldToAdd: Int!) {
    addGold(where: $where, goldToAdd: $goldToAdd) {
      gold
    }
  }
`;

const baseVideo = [
  <iframe
    width="560"
    height="315"
    title='video1'
    src="https://www.youtube.com/embed/sBws8MSXN7A"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>,
  <iframe
    width="560"
    height="315"
    title='video2'
    src="https://www.youtube.com/embed/k7h-kr6FPbc"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>,
  <iframe
    width="560"
    height="315"
    title='video3'
    src="https://www.youtube.com/embed/DLX62G4lc44"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
];

const TreeTest = props => {
  const [addGold] = useMutation(add_gold);
  const [modalData, setModalData] = useState({ isModalOpen: false });
  const { isModalOpen, node } = modalData;
  const onClose = () => {
    setModalData({ isModalOpen: false });
    document.querySelector(`[data-testid="${node.id}"]`).click();
  };
  const onFinish = () => {
    setModalData({ isModalOpen: false });
    addGold({
      variables: {
        where: { id: 'ck1mibvtbxu450908dz4a8pdy' },
        goldToAdd: node.gold,
      },
      refetchQueries: () => [{ query: me }],
    });
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
          <div style={{ textAlign: 'center', marginBottom: '2%' }}>{node.content || baseVideo[Math.floor(Math.random()*3)]}</div>
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
