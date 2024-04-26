  // Function to validate username
  document.getElementById("username").addEventListener("blur", function() {
    var username = document.getElementById("username");
    var usernameError = document.getElementById("usernameError");
    if (!useridValidation(username, 5, 12)) {
      usernameError.innerText = "Username should not be empty / length should be between 5 to 12";
    } else {
      usernameError.innerText = "";
    }
  });

  // Function to validate email
  document.getElementById("email").addEventListener("blur", function() {
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    if (!validateEmail(email)) {
      emailError.innerText = "Please enter a valid email address";
    } else {
      emailError.innerText = "";
    }
  });

  // Function to validate password
  document.getElementById("password").addEventListener("blur", function() {
    var password = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    if (!passidValidation(password, 7, 12)) {
      passwordError.innerText = "Password should not be empty / length should be between 7 to 12";
    } else {
      passwordError.innerText = "";
    }
  });

  // Function to validate mobile number
  document.getElementById("mobileNo").addEventListener("blur", function() {
    var mobileNo = document.getElementById("mobileNo");
    var mobileNoError = document.getElementById("mobileNoError");
    if (!allNumeric(mobileNo)) {
      mobileNoError.innerText = "Mobile No must be 10 digits and numeric only";
    } else {
      mobileNoError.innerText = "";
    }
  });

  // Function to validate address
  document.getElementById("address").addEventListener("blur", function() {
    var address = document.getElementById("address");
    var addressError = document.getElementById("addressError");
    if (!alphanumeric(address)) {
      addressError.innerText = "User address must have alphanumeric characters only";
    } else {
      addressError.innerText = "";
    }
  });

  function useridValidation(uid, mx, my) {
    var uidLen = uid.value.length;
    return (uidLen !== 0 && uidLen >= mx && uidLen < my);
  }

  function passidValidation(passid, mx, my) {
    var passidLen = passid.value.length;
    return (passidLen !== 0 && passidLen >= mx && passidLen < my);
  }

  function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    return uname.value.match(letters);
  }

  function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    return uadd.value.match(letters);
  }

  function allNumeric(uzip) {
    var numbers = /^[0-9]+$/;
    return (uzip.value.match(numbers) && uzip.value.length === 10);
  }

  function validateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return uemail.value.match(mailformat);
  }

  function formValidation() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var mobileNo = document.getElementById("mobileNo");
    var address = document.getElementById("address");

    if (!useridValidation(username, 5, 12) ||
        !validateEmail(email) ||
        !passidValidation(password, 7, 12) ||
        !allNumeric(mobileNo) ||
        !alphanumeric(address)) {
      alert('Please fill all fields correctly');
      return false;
    }

    alert('Form Successfully Submitted');
    window.location.reload();
    return true;
  }