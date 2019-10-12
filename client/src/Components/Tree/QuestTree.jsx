import React, { useState, useEffect } from 'react';
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';
import { treeBfs } from '../../Utils/tree';
import theme from './theme.js';
import { get_skillTypesByUserId } from './SkillTypesByUserId';
import { useQuery } from '@apollo/react-hooks';
import Slider from '../Slider';

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
        children: [
          {
            id: 'node4',
            title: 'Node 4',
            finished: false,
            tooltip: {
              description: 'Node 2',
            },
            children: [],
          },
        ],
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

const skillsToArray = skills => {
  const arr = [];
  for (let name in skills) {
    arr.push({ name, ...skills[name] });
  }
  return arr;
};

const tooltipFix = data => {
  treeBfs(data, x => {
    x['tooltip'] = x.Tooltip;
    x['tooltip'].content = '';
  });
  return data;
};

const Hoc = props => {
  const { data, loading, error } = useQuery(get_skillTypesByUserId);
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;
  return <QuestTree {...props} data={data} />;
};

const QuestTree = props => {
  const [tree, setTree] = useState([tooltipFix({ ...props.data.skillTypes[0] })]);
  // useEffect(() => {
  //   console.log(data);
  //   if (data) setTree([tooltipFix({ ...data.skillTypes[0] })]);
  // }, []);
  // console.log(tree);
  const onSelected = node => {
    props.onNodeSelection(node);
  };

  const skillsToTree = skills => {
    const cpySkills = skillsToArray(skills);
    if (cpySkills.length !== 0) {
      const newTree = [...tree];
      treeBfs(newTree[0], x => {
        const node = cpySkills.find(y => y.name === x.id);
        if (node) {
          const state = node.nodeState;
          if (!x.finished && state === 'selected') {
            x.finished = true;
            onSelected({ ...x });
          }
          x.finished = node.nodeState === 'selected';
        }
      });
      return newTree;
    }
    return tree;
  };

  const handleSave = (storage, treeId, skills) => {
    setTree(skillsToTree(skills));
  };

  return (
    <div className="Tree">
      <SkillProvider>
        <SkillTreeGroup theme={theme}>
          {() => {
            return (
              <div>
                <Slider />
                <React.Fragment>
                  <SkillTree
                    treeId="basic-birch"
                    title="HTML i CSS"
                    data={tree}
                    handleSave={handleSave}
                    savedData={{}}
                  />
                </React.Fragment>
              </div>
            );
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
};

export default Hoc;
