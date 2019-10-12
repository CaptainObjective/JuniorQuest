import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Menu,Icon, Button, Container } from 'semantic-ui-react';
import gql from 'graphql-tag';
import './style.css';


const Get_User = gql`
  {
    users {
      id
    }
  }
`;

const Home = ({children, toggleDrawer}) => {
  const { data, loading, error } = useQuery(Get_User);
  let [activeItem, setActive] = useState('quests');

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  
  return (
    <Container>
      <Menu inverted>
        <Button inverted color="blue"
          as={NavLink}
          to="/nodeTree"
          name="quests"
          active={activeItem === 'quests'}
          onClick={() => setActive((activeItem = 'quests'))}
        >
          Wyzwania
        </Button >
        <Button inverted color="blue"
          as={NavLink}
          to="/store"
          name="rewards"
          active={activeItem === 'rewards'}
          onClick={() => setActive((activeItem = 'rewards'))}
        >
          Nagrody
        </Button >
          <Button icon float='right' inverted color="blue" onClick={(e)=>{toggleDrawer()}} >
            <Icon name='align justify'   />
          </Button>
      </Menu>
      <>
      
      {children}
      </>
    </Container>
  );
};

export default Home;
