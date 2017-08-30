import React from 'react';
import UserList from '../containers/user-list';
import FilterList from '../containers/filter-list';
require('../../scss/style.scss');


const App = () => (
  <div>
    <h2>User List</h2>
    <UserList />
    <hr />
    <FilterList  />
  </div>
);


export default App;
