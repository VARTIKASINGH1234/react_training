export default function (state = {}, action) {

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  const validatePhoneNumber = (inputtxt) => {
    var pnumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.match(pnumber)) return true;
    else return false;
  }


  switch (action.type) {
    case 'ADD_USER':
      console.log("entered")
      var {firstName, lastName, email, address, phoneNumber} = action.payload;
      var valid = {firstName:null, lastName: null, 
                   email:null, address: null, phoneNumber: null,
                   firstNameError:null, lastNameError: null, 
                   emailError:null, addressError: null, phoneNumberError: null };

      if (firstName.trim() == '') 
        valid.firstNameError = "Please fill the first name"; 
      else 
        valid.firstName = firstName.trim();

      if (lastName.trim() == '') 
        valid.lastNameError = "Please fill the last name";
      else 
        valid.lastName = lastName.trim();

      if (!validateEmail(email.trim()))
        valid.emailError = "Please fill the valid Email";
      else 
        valid.email = email.trim();

      if (address.trim() == '') 
        valid.addressError = "Please fill the Address";
      else 
        valid.address =  address.trim();

      if (!validatePhoneNumber(phoneNumber.trim()))
        valid.phoneNumberError = "Please fill the valid Phone Number";
      else 
        valid.phoneNumber = phoneNumber.trim();

      return valid;
      break;
  }
  return state;
}
