import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUserDetails} from '../actions/index'


class FillDetails extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }


  handleButton(event) {
    var {myFirstName, myLastName, myEmail, myAddress, myNumber } = this.refs;
    var userDetails = {firstName: myFirstName.value,
                       lastName: myLastName.value,
                       email: myEmail.value,
                       address: myAddress.value,
                       phoneNumber: myNumber.value}
    this.props.addUserDetails(userDetails);
  }


  render() {
    const {selectFilter} = this.props ;
    const {firstNameError, lastNameError, 
           emailError, addressError, phoneNumberError} = this.props.user;


    return (
      <div>
        <h3>
          First Name* : 
          <input type = "text" ref = "myFirstName" />
        </h3>
        <p style = {{color: "red"}}>{firstNameError}</p>
        <h3>
          Last Name* : 
          <input type = "text" ref = "myLastName"/>
        </h3>
        <p style = {{color: "red"}}>{lastNameError}</p>
        <h3>
          Email* : 
          <input type = "text" ref = "myEmail" placeholder="name@email.com"/>
        </h3>
        <p style = {{color: "red"}}>{emailError}</p>
        <h3>
          Address* : 
          <input type = "text" ref = "myAddress"/>
        </h3>
        <p style = {{color: "red"}}>{addressError}</p>
        <h3>
          Phone Number* : 
          <input type = "text" ref = "myNumber" placeholder="xxx-xxx-xxxx"/>
        </h3>
        <p style = {{color: "red"}}>{phoneNumberError}</p>
        <h3>
          <button type = "button" onClick={this.handleButton}>Submit</button>
        </h3>
      </div>
    );
  }
}


const mapStateToProps= (state) => ({user: state.user});
 

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({addUserDetails: addUserDetails}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(FillDetails);
