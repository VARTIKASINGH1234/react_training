import React from 'react';
import {Link} from 'react-router'

const Nav = () => (
  <div>
    <Link to = '/'>Home</Link>&nbsp;
    <Link to = '/lists'>Get Clients</Link>&nbsp;
    <Link to = '/addLists'>Create Clients</Link>
  </div>
)


export default Nav;