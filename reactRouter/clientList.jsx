import React from 'react';
import List from './list.jsx';
import request from 'sync-request';
import AddList from './addList.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
class ClientList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {clientList: []}
  }
  

  componentWillMount() {
    var clientList;
    var res = request('GET', 'http://localhost:8081/clients');
    console.log(res.getBody());
    clientList = res.getBody()
    this.setState({clientList: JSON.parse(clientList)})
  }


  render() { 
    return (
      <div>
        <List clientList = {this.state.clientList} />
      </div>
    );
  }
}


export default ClientList;

