function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validatePhoneNumber(inputtxt) {
  var pnumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (inputtxt.match(pnumber)) return true;
  else return false;
}
function myFunction(fname, lname, mailid, address, phoneno) {
  var i1 = document.getElementById(fname).value;
  var i2 = document.getElementById(lname).value;
  var i3 = document.getElementById(mailid).value;
  var i4 = document.getElementById(address).value;
  var i5 = document.getElementById(phoneno).value;
  if (i1.trim() == '')
    document.getElementById("fname2").innerHTML = "Please fill the first name";
  else
    document.getElementById("fname1").innerHTML = i1;
  if (i2.trim() == '')
    document.getElementById("lname2").innerHTML = "Please fill the last name";
  else
    document.getElementById("lname1").innerHTML = i2;
  if (validateEmail(i3) == false)
    document.getElementById("mailid2").innerHTML = "Please fill the valid Email";
  else
    document.getElementById("mailid1").innerHTML = i3;
  if (i4.trim() == '')
    document.getElementById("address2").innerHTML = "Please fill the Address";
  else
    document.getElementById("address1").innerHTML = i4;
  if (!validatePhoneNumber(i5)) 
    document.getElementById("phoneno2").innerHTML = "Please fill the valid Phone Number";
  else
    document.getElementById("phoneno1").innerHTML = i5;
}
