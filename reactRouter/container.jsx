import React from 'react';
import Nav  from './nav.jsx';

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>


export default Container;

