import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import List from './list.jsx';


class Parent extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {clientList: []}
    this.handleClick = this.handleClick.bind(this);
  }
  

  componentWillMount() {
    const xhttp = new XMLHttpRequest();
    var clientList
    xhttp.onreadystatechange = function() {
      clientList = this.responseText;
    };
  
    xhttp.open("GET", "http://localhost:8081/clients", false);
    xhttp.send();
    this.setState({clientList: JSON.parse(clientList)})
  }
  

  handleClick (event) {
    let input = this.refs.myInput.value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8081/clients", false);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(input);
    this.refs.myInput.value = '';
    ReactDOM.findDOMNode(this.refs.myInput).focus();
    var clientList
    xhttp.onreadystatechange = function() {
      clientList = this.responseText;
      console.log(clientList);
    }; 
    xhttp.open("GET", "http://localhost:8081/clients", false);
    xhttp.send();
    this.setState({clientList: JSON.parse(clientList)})
  }


  render() { 
    return (
      <div>
        <List clientList = {this.state.clientList} />
        <textarea  cols="40" rows="5" ref = "myInput"></textarea>
        <button type="button" onClick={this.handleClick}>Post Clients</button>  
      </div>
    );
  }
}


export default Parent;

