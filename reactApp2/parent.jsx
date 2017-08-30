import React from 'react';
import ReactDOM from 'react-dom';
import List from './list.jsx';
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
        <List name = {this.state.name}></List>
      </form>
    );
  }
}


export default Parent;
   
