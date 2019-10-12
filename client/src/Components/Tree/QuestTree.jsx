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
  console.log(data);
  return <QuestTree {...props} data={data.skillTypes.map(x => [tooltipFix({ ...x })])} />;
};

const QuestTree = props => {
  const [techData, socData, taskData] = props.data;
  techData.TreeId = 'Kurs Reacta';
  socData.TreeId = 'Dowiedz się o firmie';
  taskData.TreeId = 'Twoje zadania';

  const [tree, setTree] = useState(techData);

  const renderTech = () => {
    const data = JSON.parse(localStorage.getItem(techData.TreeId)) || techData;
    setTree(data);
  };
  const renderSocial = () => {
    const data = JSON.parse(localStorage.getItem(socData.TreeId)) || socData;
    setTree(data);
  };
  const renderTask = () => {
    const data = JSON.parse(localStorage.getItem(taskData.TreeId)) || taskData;
    setTree(data);
  };

  console.log(tree);

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
    const treeTmp = skillsToTree(skills);
    setTree(treeTmp);
    localStorage.setItem(treeId, JSON.stringify(treeTmp));
    document.querySelector('div.Tree p').hidden = true;
  };

  return (
    <div className="Tree">
      <SkillProvider>
        <SkillTreeGroup theme={theme}>
          {() => {
            return (
              <div>
                <Slider {...{ renderTech, renderSocial, renderTask }} />
                <React.Fragment>
                  <SkillTree
                    treeId={tree[0].TreeId}
                    title={tree[0].TreeId}
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
