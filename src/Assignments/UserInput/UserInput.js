import React from 'react';

const UserInput = (props) =>{
    return (
        <div>
            <input type="text" placeholder="Enter Your Text Here" onChange={props.change} value={props.val}/>
        </div>
    );
};

export default UserInput;