import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const get_skillTypesByUserId = gql`
  {
    skillTypes(where: {
      user: {
        id: "ck1mibvtbxu450908dz4a8pdy"
      }
    }) {
      id
      title
      description
      user {
        id
        fullName
      }
      children {
        id
      }
      parent {
        id
      }
      icon
      junior_complete
      mentor_complete
      gold
      type
      Tooltip {
        id
      }
    }
  }
`;

const SubTree = () => {
  const { data, loading, error } = useQuery(get_skillTypesByUserId);

  console.log( data );

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

}

export default SubTree;