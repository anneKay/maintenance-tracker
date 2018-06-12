
function validateSubmit(){
  event.preventDefault();
  var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('c-password').value;
  var passwordError = document.getElementById('password-error');
  var emailError = document.getElementById('email-error');
  var nameError = document.getElementById('name-error');
  var cPasswordError = document.getElementById('c-password-error');

  if (typeof name == 'string' && name.trim() == '' && name.trim().length <= 7) {
    passwordError.innerHTML = "";
    emailError.innerHTML = "";
    cPasswordError.innerHTML = "";
    document.getElementById('name').focus();
    nameError.innerHTML = "name is too short";
  
  } else if (typeof email == 'string' && email.trim() == '' && email.trim().length == 0) {
    nameError.innerHTML = "";
    document.getElementById('email').focus();
    emailError.innerHTML = "email cannot be empty";

  } else if (!emailRegex.test(email)){
    
    document.getElementById('email').focus();
    emailError.innerHTML = "Invalid email format";

  } else if (typeof password == 'string' && password.trim().length <= 6) {
    emailError.innerHTML = "";
    cPasswordError.innerHTML = "";
    document.getElementById('password').focus();
    passwordError.innerHTML = "password must be greater than 6";
  
  } else if (password !== confirmPassword){
    passwordError.innerHTML = "";
    document.getElementById('c-password').focus();
    cPasswordError.innerHTML = "Passwords do not match";
  } else {
    signUp(name, email, password);
  }
}

var usersignup = document.getElementById('signupuser').addEventListener('submit', validateSubmit);
function signUp(name, email, password){

  console.log(`${name} ${email} ${password}`);

  return fetch('http://localhost:3000/api/v2/auth/signup', {
      method: 'POST',
      redirect: 'follow',
      headers: new Headers({
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
      }),
      body: JSON.stringify({ name: name, email: email, password: password })
     
  }).then(jsonResponse)
    .then(logData)
  .catch(logError);
}


function jsonResponse(res) {
  console.log(res);
      if (res.status == 200 || res.status == 201) {
        
        var authentication = res.headers.get("authentication");
        localStorage.setItem('authentication', authentication);
        
        window.location.href = "../html/profile.html";
      }
      return res.json();
}

function logData (data) {
  localStorage.setItem('name', data.user.name);
  return console.log(data);
}
function logError (err) {
  return console.log(err);
}

  var userSession = {
  token: localStorage.getItem('authentication'),
  name: name
  }
 
