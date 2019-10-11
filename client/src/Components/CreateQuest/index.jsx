import React, { useState } from 'react';
import { Button, Form, Segment, Header, TextArea } from 'semantic-ui-react';
import { SkillTreeGroup, SkillTree, SkillProvider } from 'beautiful-skill-tree';
import { posix } from 'path';

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

const CreateQuest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState(dataInit);

  data[0].children[0].tooltip.content = (<Button onClick={() => {
    const newData = [...data];
    newData[0].children[0].children.push({
      id: 'node4',
      title: title,
      nodeState: 'selected',
      tooltip: {
        description: description,
      },
      children: [],
    });
    setData(newData)
  }}/>);

  function handleSave(storage, treeId, skills) {
    console.log(skills);
  }

  const onFormSubmit = e => {
    console.log(e);
    // saveQuest();
  };

  const saveQuest = () => {

  }

  return (
    <div>
      <Segment>
        <Header as="h2">
            Dodaj Questa dla Juniora
        </Header>
      <Form onSubmit={onFormSubmit}>
        <Form.Input
          name="title"
          type="title"
          label="Nazwa Questa: "
          placeholder="Nazwa Questa"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
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

      <SkillProvider>
        <SkillTreeGroup>
          {() => {
            return (
              <React.Fragment>
                <SkillTree treeId="basic-birch" title="HTML i CSS" data={data} handleSave={handleSave} savedData={{"node1":{"nodeState":"selected"},"node2":{"nodeState":"selected"},"node3":{"nodeState":"selected"}}} />
              </React.Fragment>
            );
          }}
        </SkillTreeGroup>
      </SkillProvider>

      <Button type="submit" style={{display: 'block', margin: '0 auto'}} onClick={onFormSubmit}>Quest gotowy!</Button>
    </div>
  );
};

export default CreateQuest;
