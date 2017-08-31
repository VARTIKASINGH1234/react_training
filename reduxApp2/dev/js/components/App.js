import React from 'react';
import FillDetails from '../containers/fill-details';
import UserDetails from '../containers/user-details';
require('../../scss/style.scss');


const App = () => (
  <div>
    <h2>Fill your Details</h2>
    <FillDetails />
    <hr />
    <UserDetails />
  </div>
);


export default App;
