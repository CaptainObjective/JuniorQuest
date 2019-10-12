import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

const Slider = () =>{
    state = {
        first: '',
        second: '',
        third: ''
    }
   
    return(
        <>
  

        <div className = "Slider">
        <Button icon inverted color="red">
           <Icon name="left arrow" /> 
        </Button>
        <Button inverted color="red"></Button>
        <Button inverted color="red"></Button>
        <Button inverted color="red"></Button>
        <Button icon inverted color="red">
        <Icon name="right arrow" />
        </Button>
        </div>
        </>
    )
}

export default Slider;