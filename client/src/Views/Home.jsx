import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Menu } from 'semantic-ui-react';
import gql from 'graphql-tag';
import TreeTest from '../Components/Tree/Test';

const Get_User = gql`
  {
    users {
      id
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(Get_User);
  let [activeItem, setActive] = useState('quests');

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);
  return (
    <>
      <Menu>
        <Menu.Item
          as={NavLink}
          to="/"
          name="quests"
          active={activeItem === 'quests'}
          onClick={() => setActive((activeItem = 'quests'))}
        >
          Quests
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/"
          name="rewards"
          active={activeItem === 'rewards'}
          onClick={() => setActive((activeItem = 'rewards'))}
        >
          Rewards
        </Menu.Item>
      </Menu>
      <div>
        <TreeTest />
      </div>
    </>
  );
};

export default Home;
