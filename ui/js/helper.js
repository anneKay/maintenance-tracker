
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
  return console.log(data);
}
function logError (ferr) {
  return console.log(err);
}
function signUpDetails (nameId, emailId, passwordId) {
  var name = document.getElementById(nameId).value;
  var email = document.getElementById(emailId).value;
  var password = document.getElementById(passwordId).value;
  console.log('name ' + name + 'email ' +  email + 'password ' + password);

}

module.exports = {
  jsonResponse: jsonResponse,
  logData: logData,
  logError: logError,
  signUpDetails: signUpDetails
}