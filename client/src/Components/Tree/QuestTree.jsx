import React, { useState } from 'react';
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';
import { treeBfs } from '../../Utils/tree';

const treeDataInit = [
  {
    id: 'node1',
    title: 'Node 1',
    finished: false,
    tooltip: {
      description: 'Node 1',
    },
    children: [
      {
        id: 'node2',
        title: 'Node 2',
        finished: false,
        tooltip: {
          description: 'Node 2',
        },
        children: [],
      },
      {
        id: 'node3',
        title: 'Node 3',
        finished: false,
        tooltip: {
          description: 'Node 3',
        },
        children: [],
      },
    ],
  },
];

const QuestTree = props => {
  const [tree, setTree] = useState(treeDataInit);

  const skillsToTree = skills => {};
  treeBfs(tree[0], x => console.log(x.id));

  const handleSave = (storage, treeId, skills) => {
    skillsToTree();
  };

  return (
    <div className="Tree">
      <SkillProvider>
        <SkillTreeGroup>
          {() => {
            return (
              <React.Fragment>
                <SkillTree treeId="basic-birch" title="HTML i CSS" data={tree} handleSave={handleSave} savedData={{}} />
              </React.Fragment>
            );
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
};

export default QuestTree;
