import React from 'react';

import classes from './AllNotes.css';

const AllNotes = (props) =>{
    return(
        <div className={classes.PerNote}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <p style={{color:"black",fontSize:"0.5rem"}}>{props.date}</p>
            <p><i className="fas fa-trash-alt" onClick={()=>{
               props.delete(props.id);
            }}></i></p>
        </div>
    );
};

export default AllNotes;