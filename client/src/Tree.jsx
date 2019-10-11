import React, {useState} from 'react';
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';

const data = [{
  id: 'node1',
  title: 'Node 1',
  tooltip: {
    description : "Node 1",
  },
  children:[
    {
      id: 'node2',
      title: 'Node 2',
      tooltip: {
        description : "Node 2",
      },
      children:[]
    
  },
  {
    id: 'node3',
    title: 'Node 3',
    tooltip: {
      description : "Node 3",
    },
    children:[]
  
}
  ]

}];

const savedData = {/*
  'item-one': {
    optional: false,
    nodeState: 'unlocked',
  },
  'item-two': {
    optional: false,
    nodeState: 'locked',
  },
*/};


const Tree = () => {
  const prev = null;
  skillsPrev = skills;
  function handleSave(
    storage,
    treeId,
    skills
  ) {
    const skillsNext = skills;
    console.log(skillsNext);
    console.log(skillsPrev);
    //skills['first-skill2'].setState({nodeState : "unlocked"});
    //return storage.setItem(`skills-${treeId}`, JSON.stringify(skills));
  }
  return (
    <div className="Tree">
      
      <SkillProvider>
        <SkillTreeGroup>
          {() => {
            return (
              <React.Fragment>
                <SkillTree treeId="basic-birch"
                 title="HTML i CSS" 
                 data={data}
                 handleSave={handleSave}
                 savedData={[]}
                  />
              </React.Fragment>
            )
          }}
        </SkillTreeGroup>
        
      </SkillProvider>
    </div>
  );
};

export default App;