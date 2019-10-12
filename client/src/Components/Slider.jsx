import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { RenderPromises } from '@apollo/react-hooks';

const Slider = props => {
  const [form, setValues] = useState({
    first: 'TECHNOLOGY',
    second: 'TASK',
    third: 'SOCIAL',
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
        <Button icon inverted color="blue">
          <Icon name="left arrow" />
        </Button>
        <Button inverted color="blue" onClick={props.renderTech}>
          {form.first}
        </Button>
        <Button inverted color="blue" onClick={props.renderTask}>
          {form.second}
        </Button>
        <Button inverted color="blue" onClick={props.renderSocial}>
          {form.third}
        </Button>
        <Button icon inverted color="blue">
          <Icon name="right arrow" />
        </Button>
      </div>
    </>
  );
};

export default Slider;
