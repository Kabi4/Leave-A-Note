import React,{Component} from 'react';

import Person from './../Person/Person';
 
class Persons extends Component{
    render(){
        return ( this.props.Persons.map((ele,i)=>{
            return <Person click={this.props.click.bind(this,i)} changed={(e)=>{this.props.changed(e,i)}} name={ele.name} age={ele.age} key={ele.id}/>
    })
    );
    }
}

export default Persons;