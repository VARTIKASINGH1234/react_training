import React, { Component } from 'react'
import List from './list.jsx';
import request from 'sync-request';
import AddList from './addList.jsx';
import ClientList from './clientList.jsx';
import NotFound  from './notFound.jsx';
import Home  from './home.jsx';
import Container from './container.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'


class Routes extends Component {
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


export default Routes;

