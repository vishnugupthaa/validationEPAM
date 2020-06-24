// var username = document.forms['vform']['username'];
// var email = document.forms['vform']['email'];
// var password = document.forms['vform']['password'];
// var password_confirm = document.forms['vform']['password_confirm'];
// // SELECTING ALL ERROR DISPLAY ELEMENTS
// var name_error = document.getElementById('name_error');
// var email_error = document.getElementById('email_error');
// var password_error = document.getElementById('password_error');
// // SETTING ALL EVENT LISTENERS
// username.addEventListener('blur', nameVerify, true);
// email.addEventListener('blur', emailVerify, true);
// password.addEventListener('blur', passwordVerify, true);
// // validation function
// function Validate() {
//   // validate username
//   if (username.value == "") {
//     username.style.border = "1px solid red";
//     document.getElementById('username_div').style.color = "red";
//     name_error.textContent = "Username is required";
//     username.focus();
//     return false;
//   }
//   // validate username
//   if (username.value.length < 3) {
//     username.style.border = "1px solid red";
//     document.getElementById('username_div').style.color = "red";
//     name_error.textContent = "Username must be at least 3 characters";
//     username.focus();
//     return false;
//   }
//   // validate email
//   if (email.value == "") {
//     email.style.border = "1px solid red";
//     document.getElementById('email_div').style.color = "red";
//     email_error.textContent = "Email is required";
//     email.focus();
//     return false;
//   }
//   // validate password
//   if (password.value == "") {
//     password.style.border = "1px solid red";
//     document.getElementById('password_div').style.color = "red";
//     password_confirm.style.border = "1px solid red";
//     password_error.textContent = "Password is required";
//     password.focus();
//     return false;
//   }
//   // check if the two passwords match
//   if (password.value != password_confirm.value) {
//     password.style.border = "1px solid red";
//     document.getElementById('pass_confirm_div').style.color = "red";
//     password_confirm.style.border = "1px solid red";
//     password_error.innerHTML = "The two passwords do not match";
//     return false;
//   }
// }
// // event handler functions
// function nameVerify() {
//   if (username.value != "") {
//    username.style.border = "1px solid #5e6e66";
//    document.getElementById('username_div').style.color = "#5e6e66";
//    name_error.innerHTML = "";
//    return true;
//   }
// }
// function emailVerify() {
//   if (email.value != "") {
//   	email.style.border = "1px solid #5e6e66";
//   	document.getElementById('email_div').style.color = "#5e6e66";
//   	email_error.innerHTML = "";
//   	return true;
//   }
// }
// function passwordVerify() {
//   if (password.value != "") {
//   	password.style.border = "1px solid #5e6e66";
//   	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
//   	document.getElementById('password_div').style.color = "#5e6e66";
//   	password_error.innerHTML = "";
//   	return true;
//   }
//   if (password.value === password_confirm.value) {
//   	password.style.border = "1px solid #5e6e66";
//   	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
//   	password_error.innerHTML = "";
//   	return true;
//   }
// }



function formValidation() {
  var uid = document.registration.userid;
  var passid = document.registration.passid;
  var uname = document.registration.username;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex; if (userid_validation(uid, 5, 12)) {
      if (passid_validation(passid, 7, 12)) {
          if (allLetter(uname)) {
              if (alphanumeric(uadd)) {
                  if (countryselect(ucountry)) {
                      if (allnumeric(uzip)) {
                          if (ValidateEmail(uemail)) {
                              if (validsex(umsex, ufsex)) {
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  return false;

} 
function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
      alert("User Id should not be empty / length be between " + mx + " to " + my);
      uid.focus();
      return false;
  }
  return true;
}
function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
      alert("Password should not be empty / length be between " + mx + " to " + my);
      passid.focus();
      return false;
  }
  return true;
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
      return true;
  }
  else {
      alert('Username must have alphabet characters only');
      uname.focus();
      return false;
  }
}
function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
      return true;
  }
  else {
      alert('User address must have alphanumeric characters only');
      uadd.focus();
      return false;
  }
}
function countryselect(ucountry) {
  if (ucountry.value == "Default") {
      alert('Select your country from the list');
      ucountry.focus();
      return false;
  }
  else {
      return true;
  }
}
function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
      return true;
  }
  else {
      alert('ZIP code must have numeric characters only');
      uzip.focus();
      return false;
  }
}
function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
      return true;
  }
  else {
      alert("You have entered an invalid email address!");
      return false;
  }
} function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
      x++;
  }
  if (ufsex.checked) {
      x++;
  }

  if (x == 2) {
      alert('Both Male/Female are checked');
      ufsex.checked = false
      umsex.checked = false
      umsex.focus();
      return false;
  }

  if (x == 0) {
      alert('Select Male/Female');
      umsex.focus();
      return false;
  }
  else {
      alert('Form Succesfully Submitted');
      window.location.reload()
      return true;
  }
}