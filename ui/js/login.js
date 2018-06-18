
function validateSubmit(){
  event.preventDefault();
  var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
  
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  var passwordError = document.getElementById('password-error');
  var emailError = document.getElementById('email-error');
  

  if (typeof email == 'string' && email.trim() == '' && email.trim().length == 0) {
   
    document.getElementById('email').focus();
    emailError.innerHTML = "email cannot be empty";

  } else if (!emailRegex.test(email)){
    
    document.getElementById('email').focus();
    emailError.innerHTML = "Invalid email format";

  } else if (typeof password == 'string' && password.trim().length <= 6) {
    emailError.innerHTML = "";
    
    document.getElementById('password').focus();
    passwordError.innerHTML = "password must be greater than 6";
  
  } else {
    login(email, password);
  }
}


function clickDiv() {

  window.location.href = "../html/requestdetails.html"
}

function displayPage(){
  if(document.getElementById('email').value === "admin@admin.com"){
      window.location.href = "../html/admin.html";
  } else{
      window.location.href = "../html/profile.html";
  }
}


var userLogin = document.getElementById('loginUser').addEventListener('submit', validateSubmit);

function login(email, password){

  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/auth/login', {
      method: 'POST',
      redirect: 'follow',
      headers: new Headers({
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
      }),
      body: JSON.stringify({email: email, password: password })
     
  }).then(jsonResponse)
    .then(logData)
  .catch(logError);
}


function jsonResponse(res) {
  console.log(res);
       if (res.status == 200 || res.status == 201) {
        
         var authentication = res.headers.get("authentication");
         localStorage.setItem('authentication', authentication);      
    }  else if(res.status == 401) {
      document.getElementById('login-error').innerHTML = "Incorrect Email or Password";
     
}
return res.json();
}

function logData (data) {
  localStorage.setItem('name', data.user.name);
  if(data.user.admin){
        window.location.href = "../html/admin.html";
    } else{
         window.location.href = "../html/profile.html";}
     
  return console.log(data);
}
function logError (err) {
  return console.log(err);
}

  var userSession = {
  token: localStorage.getItem('authentication'),
  name: name
  }
