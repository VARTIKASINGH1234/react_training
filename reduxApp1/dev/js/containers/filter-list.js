import React, {Component} from 'react';
import {connect} from 'react-redux';


class FilterList extends Component {

  filterList() {
    if (this.props.filter == '')
      return <p> Select Filter....... </p> ;

    return this.props.users.map((user, index) => {
      if ((user.isDeleted == 0 && this.props.filter == "Active") ||
          (user.isDeleted == 1 && this.props.filter == "Deleted") ||
          (this.props.filter == "All"))
        return (<li key = {index}>{user.name}</li>);
    });
  }


  render() {
    return (
      <div>
        <h3>{this.props.filter}</h3>
        <ul>
          {this.filterList()}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({ filter: state.filter, users: state.users })


export default connect(mapStateToProps)(FilterList);
