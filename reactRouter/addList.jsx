import React from 'react';
import ReactDOM from 'react-dom';
import List from './list.jsx';
import request from 'sync-request';
import ClientList from './clientList.jsx';
import {Url} from './url';


class AddList extends React.Component { 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick (event) {
    let input = this.refs.myInput.value;
    var res = request('POST', Url(), {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: input
    });
    this.refs.myInput.value = '';
    ReactDOM.findDOMNode(this.refs.myInput).focus();
    window.location.reload();
  }


  render() { 
    return (
      <div>
        <textarea  cols="40" rows="5" ref = "myInput"></textarea>
        <button type="button" onClick={this.handleClick}>Post Clients</button> 
      </div>
    );
  }
}


export default AddList;

