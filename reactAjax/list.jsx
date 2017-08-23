import React from 'react';
import PropTypes from 'prop-types';


class List extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {nameList: []}
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
    this.setState({nameList: JSON.parse(clientList)})
  }
  

  handleClick (event) {
    let input = this.refs.myInput.value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8081/clients", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(input));
    this.refs.myInput.value = '';
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.nameList.length && this.state.nameList.map((item,index) => 
            <li key={index}>{item.Name}</li>
          )}      
        </ul>
        <input type = "text" ref = "myInput" />
        <button type="button" onClick={this.handleClick}>Post Clients</button>  
      </div>
    );
  }
}

export default List;

