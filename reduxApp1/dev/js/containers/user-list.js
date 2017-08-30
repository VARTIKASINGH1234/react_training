import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, selectFilter, addUser} from '../actions/index'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }


  renderList() {
    return this.props.users.map((user, index) => {
      return <li key = {index} 
                 style = {{color: user.color}}  
                 onClick={() => this.props.selectUser(user)}> {user.name} </li>;
    })
  }


  handleButton(event) {
    this.props.addUser(this.refs.myName.value);
    this.refs.myName.value = '';
  }


  render() {
    return (
      <div>
        <label>
          Name:
          <input type="text" ref = "myName"/>
        </label>
        <p>
          <button type="button" onClick={this.handleButton}>Submit</button>
        </p>
        <ul>
          {this.renderList()}
        </ul>
        <button 
          type="button" 
          onClick = {() => this.props.selectFilter("Active")}>displayActiveList
        </button>
        <button 
          type="button" 
          onClick = {() => this.props.selectFilter("Deleted")}>displayDeletedList
        </button>  
        <button 
          type="button" 
          onClick = {() => this.props.selectFilter("All")}>displayAllList
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({users: state.users})


const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({selectUser: selectUser,
                             selectFilter: selectFilter, 
                             addUser: addUser}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserList);
