import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.jsx';
import PropTypes from 'prop-types';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    
    this.handleButton = this.handleButton.bind(this);
  }
  

  handleButton(event) {
    let myName = this.refs.myName;
    this.setState({name: myName.value.trim()});
    myName.value = '';
    ReactDOM.findDOMNode(myName).focus();
  }


  render() {
    return (
      <form >
        <label>
          Name:
          <input type="text" ref = "myName"/>
        </label>
        <p>
          <button type="button" onClick={this.handleButton}>Submit</button>
        </p>
        <Child name = {this.state.name}></Child>
      </form>
    );
  }
}


export default Parent;
   
