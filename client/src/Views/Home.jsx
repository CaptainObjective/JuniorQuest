import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ModalTest from '../Components/Modals/Test';

const Get_User = gql`
  {
    users {
      id
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(Get_User);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);
  return (
    <div>
      <ModalTest />
    </div>
  );
};

export default Home;
