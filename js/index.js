function onCheckValidation() {
  return onCheckSignUp() && checkLength("name", 2, 30) &&
   checkEmail("email");
}

function onCheckSignUp() {
 
   var name = document.getElementById("name");
   var email = document.getElementById("email");
   

   var pAlertName = document.getElementById("pAlertName");
   var pAlertEmail = document.getElementById("pAlertEmail");

  if (
    name.value === "" ||
    email.value === "" 
  ) {

   // Name
    name.style.border = "1px solid red";
    pAlertName.innerHTML = "Please input name !!!";
    pAlertName.style.display = "block";

    if (name.value !== "") {
      name.style.border = "";
      pAlertName.style.display = "none";
    }


    // Email
    email.style.border = "1px solid red";
    pAlertEmail.textContent = "Please input email !!!";
    pAlertEmail.style.display = "block";

    if (email.value !== "") {
      email.style.border = "";
      pAlertEmail.style.display = "none";
    }
 

    return false;
  } else {
     return true;
  }
}

function checkLength(idText, min, max) {
  var name = document.getElementById("name");
  var nameValue = name.value;
  var pAlertName = document.getElementById("pAlertName");

  if(nameValue.length < min ||  nameValue.length > max) {
    
    pAlertName.innerHTML = "Please input characters from " + min + " to " + max;
    pAlertName.style.display = "block";
    return false;
  } else {
    return true;
  }
}

function checkEmail(idEmail) {
  var email = document.forms["contact-form"]["email"];
  var pAlertEmail = document.getElementById("pAlertEmail");
  var emailTrue = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  if(email.value.match(emailTrue)) {
    pAlertEmail.style.display = "none";
    return true;
  } else {
    
    pAlertEmail.innerHTML = "Please input email !!!";
    pAlertEmail.style.display = "block";
    return false;
  }
 
}

