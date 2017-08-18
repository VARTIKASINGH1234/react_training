import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.jsx'
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", array: []};

    this.handleButton = this.handleButton.bind(this);
  }
  
  handleButton(event) {
    let array = this.state.array;
    let myName = this.refs.myName;
    if (!array.find((element) => (myName.value.trim() == "" || (element == myName.value.trim())))) { 
      array.push(myName.value.trim());
      this.setState({name: myName.value.trim()});
    };
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
        <Child Name = {this.state.array}></Child>
      </form>
    );
  }
}

export default Parent;
   
