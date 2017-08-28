import React from 'react';
import {Link, hashHistory} from 'react-router'

class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.onNavigateHome = this.onNavigateHome.bind(this);
    this.onNavigateList = this.onNavigateList.bind(this);
    this.onNavigateAddList = this.onNavigateAddList.bind(this);
  }


  onNavigateHome(event) {
    hashHistory.push('/');
  }


  onNavigateList(event) {
    hashHistory.push('/lists');
  }


  onNavigateAddList(event) {
    hashHistory.push('/addLists');
  }

  render() {
    return (
      <div>
    	<button type="button" onClick={this.onNavigateHome}>Home</button>&nbsp; 
    	<button type="button" onClick={this.onNavigateList}>Get Clients</button>&nbsp; 
    	<button type="button" onClick={this.onNavigateAddList}>Create Clients</button> 
 	  </div>
 	);
  }
}


export default Nav;