import React, {useState} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import { RenderPromises } from '@apollo/react-hooks';

const Slider = () => {

    const [form, setValues] = useState({
        first: 'rew',
        second: 'rewq',
        third: 'rewq'
      });

      const updateField = e => {
        setValues({
          ...form,
          [e.target.name]: e.target.value
        });
      };

    return(
        <>
        <div className = "Slider">
        <Button icon inverted color="red">
           <Icon name="left arrow" /> 
        </Button>
        <Button inverted color="red" >{form.first}</Button>
        <Button inverted color="red">{form.second}</Button>
        <Button inverted color="red">{form.third}</Button>
        <Button icon inverted color="red">
        <Icon name="right arrow" />
        </Button>
        </div>
        </>
    )
}

export default Slider;