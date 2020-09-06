import React from "react";

const UserOutput = (props) =>{
    return(
        <div>
            <p>Hey! my name is {props.firstName}.</p>
            <p>My surname is {props.lastName}.</p>
        </div>
    );
};

export default UserOutput;