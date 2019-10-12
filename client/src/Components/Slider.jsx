import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

const Slider = () =>{
    return(
        <>
        <div className = "Slider">
        <Button icon inverted color="red">
           <Icon name="left arrow" /> 
        </Button>
        <Button inverted color="red">First</Button>
        <Button inverted color="red">Second</Button>
        <Button inverted color="red">Third</Button>
        <Button icon inverted color="red">
        <Icon name="right arrow" />
        </Button>
        </div>
        </>
    )
}

export default Slider;