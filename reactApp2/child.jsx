import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {array: [], state: ""};
    this.handleClick = this.handleClick.bind(this);
    this.handleActiveClick = this.handleActiveClick.bind(this);
    this.handleDeletedClick = this.handleDeletedClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
  }
  
  
  componentWillReceiveProps(newProps) { 
    let array = this.state.array.slice();
    let object = {name: newProps.name, isDeleted: false, Color: ''};
    if (!array.find((element) => (object.name == "" || element.name == object.name)))
      array.push(object);
    this.setState({ array: array });
  }
  

  handleClick(event) {
    let value = event.target.value;
    let index = this.state.array.findIndex((object) => (object.name == value));
    let item = this.state.array[index];
    let stateCopy = Object.assign({}, this.state);
    stateCopy.array[index].isDeleted = true;
    stateCopy.array[index].Color = 'red';
    this.setState(stateCopy);
  }


  handleActiveClick(event) {
    this.setState({state: "Active"});
  }
 

  handleDeletedClick(event) {
    this.setState({state: "Deleted"});
  }
 

  handleAllClick(event) {
    this.setState({state: "All"});
  }
 

  render() {
    return (
      <div>
        <ul>
          {this.state.array.map((item,index) => 
            <li key={index}>
              <button 
                type = "button" value = {item.name}
                onClick = {this.handleClick} 
                style = {{color:item.Color}}
                ref = "input">{item.name}
              </button>             
            </li>
          )}      
        </ul>  
        <ul>   
          <button 
            type="button" 
            onClick = {this.handleActiveClick}>displayActiveList
          </button>
          <button 
            type="button" 
            onClick = {this.handleDeletedClick}>displayDeletedList
          </button>  
          <button 
            type="button" 
            onClick = {this.handleAllClick}>displayAllList
          </button>
          <h4 style = {{color: 'green'}}>
            {this.state.state }
          </h4>
            {this.state.array.map((item,index) => {
              if ((this.state.array[index].isDeleted && this.state.state == "Deleted") ||
                 (!this.state.array[index].isDeleted && this.state.state == "Active") ||
                 (this.state.state == "All")) {
                return <li key={index}>{item.name}</li>;
              }
            })}
        </ul>     
      </div>
    );
  }
}

Child.PropTypes = {
   name: PropTypes.string,
   name: PropTypes.isRequired  
};


export default Child;

