import React from 'react';
import PropTypes from 'prop-types';


const List = ({clientList}) => (
  <ul>
    {clientList.length &&clientList.map((item,index) => 
      <li key={index}>{item.Name}</li>
    )}      
  </ul>
);


  List.propTypes = {
    clientList: PropTypes.array.isRequired,
  };


export default List;
