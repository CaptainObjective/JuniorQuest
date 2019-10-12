import React, {useState} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import { RenderPromises } from '@apollo/react-hooks';

const Slider = () => {

    const [form, setValues] = useState({
        first: '',
        second: '',
        third: ''
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
        <Button inverted color="blue" >{form.first}</Button>
        <Button inverted color="violet">{form.second}</Button>
        <Button inverted color="orange">{form.third}</Button>
        <Button icon inverted color="yellow">
        <Icon name="right arrow" />
        </Button>
        </div>
        </>
    )
}

export default Slider;