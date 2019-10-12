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

const SkillTypesByUserId = () => {
  const { data, loading, error } = useQuery(get_skillTypesByUserId);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  console.log(data.skillTypes)

  return (
    <div>
      { data.skillTypes.map( (el) => { return <p key={el.id}>{el.user.fullName} | {el.type} | {el.title}</p>; }) }
    </div>
  );

}

export default SkillTypesByUserId;