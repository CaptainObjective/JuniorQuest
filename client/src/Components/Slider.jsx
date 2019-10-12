import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { RenderPromises } from '@apollo/react-hooks';

const Slider = props => {
  const [form, setValues] = useState({
    first: 'OSIĄGNIĘCIA',
    second: 'INTEGRACJA',
    third: 'ZADANIA',
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="Slider">
        
        <Button inverted color="blue" onClick={props.renderTech}>
          {form.first}
        </Button>
        <Button inverted color="blue" onClick={props.renderTask}>
          {form.second}
        </Button>
        <Button inverted color="blue" onClick={props.renderSocial}>
          {form.third}
        </Button>
     
      </div>
    </>
  );
};

export default Slider;
