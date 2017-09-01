import React from 'react';
import FillUserDetails from '../containers/fill-userDetails';
import DisplayUserDetails from '../containers/display-userDetails';
import style from '../../scss/style.scss';

const App = () => (
  <div>
    <h2>Fill your Details</h2>
    <FillUserDetails />
    <hr />
    <DisplayUserDetails />
  </div>
);

export default App;
