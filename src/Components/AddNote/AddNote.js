import React, { Component } from 'react';

import classes from './AddNote.css';

class AddNote extends Component{
    clearAll =  ()=>{
        document.querySelector('.titleInput').value = "";
        document.querySelector('.titleMessage').value = "";
        document.querySelector('.titleInput').focus();
    }
    render(){
        return(
            <div className={classes.AddNote}>
                <input className="titleInput" placeholder="Your Name Or Title Here"  type="text" onChange={(e)=>{this.props.titleChange(e)}}/>
                <textarea className="titleMessage" placeholder="Enter Message" onChange={(e)=>{this.props.messageChange(e)}}/>
                <button onClick={()=>{
                    this.props.addPost();
                    this.clearAll();
                }} >Console.log(Note)</button>
            </div>
    );
    }
};

export default AddNote;