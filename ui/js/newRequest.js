function validateInput(){
  event.preventDefault();
  
  var title = document.getElementById('title').value;
  var description = document.getElementById('describe').value;
  var requestType = document.getElementById('req-type').value;
  
  var titleError = document.getElementById('title-error');
  var describeError = document.getElementById('describe-error');
  var reqError = document.getElementById('req-type-error');

  if (typeof title == 'string' && title.trim() == '' && title.trim().length <= 4) {
   
    document.getElementById('title').focus();
    titleError.innerHTML = "title cannot be empty";

  } else if (typeof description == 'string' && description.trim() == '' && description.trim().length < 10){
    
    document.getElementById('describe').focus();
    describeError.innerHTML = "Text too short";

  } else if (typeof requestType == 'string' && requestType.trim().length == 0) {
    titleError.innerHTML = "";
    
    document.getElementById('req-type').focus();
    reqError.innerHTML = "Input your request type";
    
  } else {
    
    createReq(title, description, requestType);
    
  }
}

var newReq = document.getElementById('create-req').addEventListener('submit', validateInput);

function createReq(title, description, requestType){

  return fetch('http://localhost:3000/api/v2/users/requests', {
      method: 'POST',
      headers: new Headers({
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
          'authentication': userSession.token
      }),
      body: JSON.stringify({title: title, description: description, requestType: requestType})
     
  }).then(jsonResponse)
    .then(loadProfile)
  .catch(logError);
}


function jsonResponse(res) {
  console.log(res);
       if (res.status == 200 || res.status == 201) {
         
    }  else if(res.status == 400) {
      document.getElementById('req-error').innerHTML = "There was a problem creating your request";
     
}
return res.json();
}


function loadProfile (data) {
 window.location.href = "../html/profile.html";
  return console.log(data);
}
function logError (err) {
  return console.log(err);
}

var userSession = {
  token: localStorage.getItem('authentication'),
  name: localStorage.getItem('name')
  }
 