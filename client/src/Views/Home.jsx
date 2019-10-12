import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Menu } from 'semantic-ui-react';
import gql from 'graphql-tag';
import TreeTest from '../Components/Tree/Test';
import Slider from '../Components/Slider';
import './style.css';

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
    <div className = "navbar">
      <Menu inverted>
        <Menu.Item 
          as={NavLink}
          to="/"
          name="quests"
          active={activeItem === 'quests'}
          onClick={() => setActive((activeItem = 'quests'))}
        >
          Quests
        </Menu.Item >
        <Menu.Item color = "red" 
          as={NavLink}
          to="/"
          name="rewards"
          active={activeItem === 'rewards'}
          onClick={() => setActive((activeItem = 'rewards'))}
        >
          Rewards
        </Menu.Item>
      </Menu>
      </div>
        
      <div className="Container">
        <div className="mainStuff">
        <Slider />
        <TreeTest />
        </div>
      </div>
    </>
  );
};

export default Home;
