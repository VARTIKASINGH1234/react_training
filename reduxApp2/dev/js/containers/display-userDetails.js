import React, {Component} from 'react';
import {connect} from 'react-redux';

class DisplayUserDetails extends Component {
  render() {
    const {firstName, lastName, email, address, phoneNumber} = this.props.user;
    return (
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{address}</p>
        <p>{phoneNumber}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) =>  ({user: state.user});

export default connect(mapStateToProps)(DisplayUserDetails);
