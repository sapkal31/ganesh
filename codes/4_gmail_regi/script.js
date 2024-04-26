
function formValidation() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var mobileNo = document.getElementById("Mobileno");
    var address = document.getElementById("Address");
    var isValid = true;

    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("MobilenoError").innerText = "";
    document.getElementById("AddressError").innerText = "";

    if (!useridValidation(username, 5, 12)) {
      isValid = false;
    }

    if (!passidValidation(password, 7, 12)) {
      isValid = false;
    }

    if (!allLetter(username)) {
      isValid = false;
    }

    if (!alphanumeric(address)) {
      isValid = false;
    }

    if (!allNumeric(mobileNo, 10)) {
      isValid = false;
    }

    if (!validateEmail(email)) {
      isValid = false;
    }

    if (isValid) {
      alert('Form Successfully Submitted');
      window.location.reload();
      return true;
    }

    return false;
  }

  function useridValidation(uid, mx, my) {
    var uidLen = uid.value.length;
    if (uidLen === 0 || uidLen >= my || uidLen < mx) {
      alert("Username should not be empty / length should be between " + mx + " to " + my);
      uid.focus();
      return false;
    }
    return true;
  }

  function passidValidation(passid, mx, my) {
    var passidLen = passid.value.length;
    if (passidLen === 0 || passidLen >= my || passidLen < mx) {
      alert("Password should not be empty / length should be between " + mx + " to " + my);
      passid.focus();
      return false;
    }
    return true;
  }

  function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
      return true;
    } else {
      alert('Username must have alphabet characters only');
      uname.focus();
      return false;
    }
  }

  function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
      return true;
    } else {
      alert('User address must have alphanumeric characters only');
      uadd.focus();
      return false;
    }
  }

  function allNumeric(uzip, mx) {
    var numbers = /^[0-9]+$/;
    var vishal = uzip.value.length;
    if (vishal === 10 && uzip.value.match(numbers)) {
      return true;
    } else {
      alert('Mobile No Must be 10 Digits');
      uzip.focus();
      return false;
    }
  }

  function validateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      uemail.focus();
      return false;
    }
  }