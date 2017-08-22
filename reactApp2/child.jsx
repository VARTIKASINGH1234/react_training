import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {array: [], button: ""};
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
    this.setState({button: 'Active'});
  }
 

  handleDeletedClick(event) {
    this.setState({button: 'Deleted'});
  }
 

  handleAllClick(event) {
    this.setState({button: 'All'});
  }
 

  render() {
    const {array, button} = this.state;
    return (
      <div>
        <ul>
          {array.map((item,index) => 
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
            {button }
          </h4>
            {array.map((item,index) => {
              if ((array[index].isDeleted && button == 'Deleted') ||
                 (!array[index].isDeleted && button == 'Active') ||
                 (button == "All")) {
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

