import React,{useEffect,useRef} from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) =>{
    const toggleButton = useRef();
    useEffect(()=>{
        toggleButton.current.click();
        return (()=>{console.log("Clearing Data")});
    },[]);
    let buttonClass ="";
    buttonClass = classes.button;
    if(props.visible)buttonClass = buttonClass+" "+classes.red;
    return (
        <div>
            <h1>{props.title}</h1>
            <button ref={toggleButton} onClick={props.toggle} className={buttonClass}>Change Name</button>
        </div>
    );
};

export default Cockpit;