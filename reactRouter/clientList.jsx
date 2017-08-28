import React from 'react';
import List from './list.jsx';
import request from 'sync-request';
import AddList from './addList.jsx';
import {Url} from './url';
import {hashHistory} from 'react-router';


class ClientList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {clientList: []}
    this.onNavigateBack = this.onNavigateBack.bind(this);
  }
  

  componentWillMount() {
    var clientList;
    var res = request('GET', Url());
    clientList = res.getBody();
    this.setState({clientList: JSON.parse(clientList)})
  }


  onNavigateBack(event) {
    hashHistory.push('/');
  }


  render() { 
    return (
      <div>
        <List clientList = {this.state.clientList} />
        <button type = "button" onClick = {this.onNavigateBack}>Back</button>
      </div>
    );
  }
}


export default ClientList;

