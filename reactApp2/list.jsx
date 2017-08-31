import React from 'react';
import PropTypes from 'prop-types';
import FilteredList from './filteredList.jsx';


class List extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {nameList: [], selectedFilter: ""};
    this.handleClick = this.handleClick.bind(this);
    this.handleActiveClick = this.handleActiveClick.bind(this);
    this.handleDeletedClick = this.handleDeletedClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
  }
  
  
  componentWillReceiveProps(newProps) { 
    let nameList = this.state.nameList.slice();
    let object = {name: newProps.name, isDeleted: false, Color: ''};
    if (!nameList.find((element) => (object.name == "" || element.name == object.name)))
      nameList.push(object);
    this.setState({ nameList: nameList });
  }
  

  handleClick(event) {
    let value = event.target.value;
    let index = this.state.nameList.findIndex((object) => (object.name == value));
    let item = this.state.nameList[index];
    let stateCopy = Object.assign({}, this.state);
    stateCopy.nameList[index].isDeleted = true;
    stateCopy.nameList[index].Color = 'red';
    this.setState(stateCopy);
  }


  handleActiveClick(event) {
    this.setState({selectedFilter: 'Active'});
  }
 

  handleDeletedClick(event) {
    this.setState({selectedFilter: 'Deleted'});
  }
 

  handleAllClick(event) {
    this.setState({selectedFilter: 'All'});
  }
 

  render() {
    const {nameList, selectedFilter} = this.state;
    return (
      <div>
        <ul>
          {nameList.map((item,index) => 
            <li key={index}>
              <button 
                type = "button" value = {item.name}
                onClick = {this.handleClick} 
                style = {{color:item.Color}}
                ref = "input">{item.name}
              </button>             
            </li>
          )}      
        </ul>  
        <ul>   
          <button 
            type="button" 
            onClick = {this.handleActiveClick}>displayActiveList
          </button>
          <button 
            type="button" 
            onClick = {this.handleDeletedClick}>displayDeletedList
          </button>  
          <button 
            type="button" 
            onClick = {this.handleAllClick}>displayAllList
          </button>
          <h4 style = {{color: 'green'}}>
            {selectedFilter }
          </h4>
          <FilteredList nameList = {nameList} selectedFilter = {selectedFilter} />
        </ul>     
      </div>
    );
  }
}


List.propTypes = {
   name: PropTypes.string.isRequired,
}; 


export default List;

