import React, { useState } from 'react';
import { Button, Form, Segment, Header, TextArea } from 'semantic-ui-react';
import { SkillTreeGroup, SkillTree, SkillProvider } from 'beautiful-skill-tree';
import { treeBfs } from '../../Utils/tree.js';
import NegativeMessage from '../NegativeMessage/';

const dataInit = [
  {
    id: 'node1',
    title: 'Node 1',
    nodeState: 'selected',
    tooltip: {
      description: 'Node 1',
    },
    children: [
      {
        id: 'node2',
        title: 'Node 2',
        nodeState: 'selected',
        tooltip: {
          description: 'Node 2',
        },
        children: [],
      },
      {
        id: 'node3',
        title: 'Node 3',
        nodeState: 'selected',
        tooltip: {
          description: 'Node 3',
        },
        children: [],
      },
    ],
  },
];

const dataToSelected = data => {
  const savedData = {};
  treeBfs(data[0], x => (savedData[x.id] = { nodeState: 'selected' }));
  return savedData;
};

const CreateQuest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState(dataInit);
  const [savedData, setSavedData] = useState(dataToSelected(data));
  const [nameValidationMsg, setNameValidationMsg] = useState(null);

  const bindButtonsToTree = () => {
    treeBfs(data[0], x => {
      savedData[x.id] = { nodeState: 'selected' };
      x.tooltip.content = (
        <Button
          onClick={() => {
            if (!title) {
              setNameValidationMsg({ header: 'Tytuł nie może być pusty', paragraph: '' });
              return;
            }
            if (savedData[title]) {
              setNameValidationMsg({ header: 'Taki tytuł już istnieje', paragraph: '' });
              return;
            }
            const newData = [...data];
            let node = null;
            treeBfs(newData[0], y => {
              if (y.id === x.id) {
                node = y;
              }
            });
            const newNode = {
              id: title,
              title: title,
              nodeState: 'selected',
              tooltip: {
                description: description,
              },
              children: [],
            };
            node.children.push(newNode);
            setData(newData);
            setTitle('');
            setDescription('');
          }}
        >
          Dodaj Tutaj
        </Button>
      );
    });
  };

  const handleSave = (storage, treeId, skills) => {
    setSavedData(dataToSelected(data));
  };

  const onFormSubmit = e => {
    console.log(e);
    // saveQuest();
  };

  bindButtonsToTree();

  return (
    <div>
      <Segment>
        <Header as="h2">Dodaj Questa dla Juniora</Header>
        <Form onSubmit={onFormSubmit}>
          <Form.Input
            name="title"
            type="title"
            label="Nazwa Questa: "
            placeholder="Nazwa Questa"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          {nameValidationMsg && <NegativeMessage {...nameValidationMsg} />}
          <Form.Input
            type="description"
            control={TextArea}
            label="Opis: "
            placeholder="Opis"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Form>
      </Segment>
      <div style={{ color: 'white' }}>
        <SkillProvider>
          <SkillTreeGroup>
            {() => {
              return (
                <React.Fragment>
                  <SkillTree
                    treeId="basic-birch"
                    title="HTML i CSS"
                    data={data}
                    handleSave={handleSave}
                    savedData={savedData}
                  />
                </React.Fragment>
              );
            }}
          </SkillTreeGroup>
        </SkillProvider>
      </div>
    </div>
  );
};

export default CreateQuest;
