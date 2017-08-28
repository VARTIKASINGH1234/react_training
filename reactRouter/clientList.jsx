import React from 'react';
import List from './list.jsx';
import request from 'sync-request';
import AddList from './addList.jsx';
import {Url} from './url';
import {Router, Link} from 'react-router';


class ClientList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {clientList: []}
  }
  

  componentWillMount() {
    var clientList;
    var res = request('GET', Url());
    clientList = res.getBody();
    this.setState({clientList: JSON.parse(clientList)})
  }


  render() { 
    return (
      <div>
        <List clientList = {this.state.clientList} />
        <Link to = '/'>Back</Link>&nbsp;
      </div>
    );
  }
}


export default ClientList;

