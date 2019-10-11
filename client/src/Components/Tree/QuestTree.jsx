import React, { useState } from 'react';
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';

const data = [
  {
    id: 'node1',
    title: 'Node 1',
    tooltip: {
      description: 'Node 1',
    },
    children: [
      {
        id: 'node2',
        title: 'Node 2',
        tooltip: {
          description: 'Node 2',
        },
        children: [],
      },
      {
        id: 'node3',
        title: 'Node 3',
        tooltip: {
          description: 'Node 3',
        },
        children: [],
      },
    ],
  },
];

const QuestTree = props => {
  function handleSave(storage, treeId, skills) {
    console.log(skills);
  }

  return (
    <div className="Tree">
      <SkillProvider>
        <SkillTreeGroup>
          {() => {
            return (
              <React.Fragment>
                <SkillTree treeId="basic-birch" title="HTML i CSS" data={data} handleSave={handleSave} savedData={[]} />
              </React.Fragment>
            );
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
};

export default QuestTree;
