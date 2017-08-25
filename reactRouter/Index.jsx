import React, { Component } from 'react'
import List from './list.jsx';
import request from 'sync-request';
import AddList from './addList.jsx';
import ClientList from './clientList.jsx';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
class Index extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path = 'lists' component={ClientList} />
          <Route path = 'addLists' component={AddList} />
          <Route path = '*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}


const Nav = () => (
  <div>
    <Link to = '/'>Home</Link>&nbsp;
    <Link to = '/lists'>Get Clients</Link>&nbsp;
    <Link to = '/addLists'>Create Clients</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>WELCOME</h1>


const NotFound = () => <h1>404.. This page is not found!</h1>

export default Index
