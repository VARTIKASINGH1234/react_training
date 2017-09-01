export default function (state = {}, action) {

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  const validatePhoneNumber = (inputtxt) => {
    var pnumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return (inputtxt.match(pnumber));
  }


  switch (action.type) {
    case 'ADD_USER':
      var {firstName, lastName, email, address, phoneNumber} = action.payload;
      var valid = {
                   firstName: null,
                   lastName: null,                    
                   email: null, 
                   address: null, 
                   phoneNumber: null,
                   firstNameError: null, 
                   lastNameError: null, 
                   emailError: null, 
                   addressError: null, 
                   phoneNumberError: null 
                  };

      firstName = firstName.trim();
      lastName = lastName.trim();
      email = email.trim();
      address = address.trim();
      phoneNumber = phoneNumber.trim();

      valid.firstNameError = (!firstName) ? "Please fill the first name" : null; 
      valid.firstName = (!!firstName) ? firstName : null;

      valid.lastNameError = (!lastName) ? "Please fill the last name" : null;
      valid.lastName = (!!lastName) ? lastName : null;

      valid.emailError = (!validateEmail(email)) ? "Please fill the valid Email" : null;
      valid.email = (!!validateEmail(email)) ? email.trim() : null;

      valid.addressError = (!address) ? "Please fill the Address" : null;
      valid.address = (!!address) ? address : null;

      valid.phoneNumberError = (!validatePhoneNumber(phoneNumber)) ? 
        "Please fill the valid Phone Number" : null;
      valid.phoneNumber = (!!validatePhoneNumber(phoneNumber)) ? 
        phoneNumber : null;

      return valid;
      break;
  }
  return state;
}
