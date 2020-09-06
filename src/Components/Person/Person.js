import React,{Component} from 'react';

import classes from './Person.css';

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click} className={classes.delete}>Myself {this.props.name}. I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                // ref={(inputele)=>{this.inputElement = inputele}}
                ref = {this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </div>
            );
    }
}

export default Person;