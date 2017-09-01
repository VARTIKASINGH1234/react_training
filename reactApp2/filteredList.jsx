import React from 'react';
import PropTypes from 'prop-types';


const FilteredList = ({ nameList, selectedFilter }) => (
  <ul>
    {nameList.map((item,index) => {
      if ((nameList[index].isDeleted && selectedFilter == 'Deleted') ||
          (!nameList[index].isDeleted && selectedFilter == 'Active') ||
          (selectedFilter == "All")) {
        return <li key={index}>{item.name}</li>
      }
    })}      
  </ul>
);


FilteredList.propTypes = {
  nameList: PropTypes.array.isRequired,
  selectedFilter: PropTypes.oneOf(['Active', 'Deleted', 'All', '']).isRequired
};


export default FilteredList;