window.onload = function() {
  getSingleRequest();
 };
 

function loadDetails(){
  
var queryString = decodeURIComponent(window.location.search);
  
queryString = queryString.substring(1);
var queries = queryString.split("=");
console.log(queries[1]);

}

var detailDiv = document.getElementById('detail-div');
var detailEl = document.getElementById('details');

var reqType = document.getElementById('req-type');
var titleEl = document.getElementById('title');
var describeEl = document.getElementById('describe');
var timeEl = document.getElementById('time');
var editBox = document.getElementById('edit-box');
var detailBox = document.getElementById('detail-box');

var requestId;
var title;
var description;
var createdAt;

function getSingleRequest(){
 
 
  editBox.style.display = 'none';
  detailEl.innerHTML = "Request Details"
  detailDiv.style.display="block";

  var queryString = decodeURIComponent(window.location.search);
  
queryString = queryString.substring(1);
var queries = queryString.split("=");
requestId = (queries[1]);

  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/users/requests/'+requestId, {
      method: 'GET',
      headers: new Headers({
          'authentication': userSession.token
      }),
     
  }).then(function (res) {
    redirectUser(res);
    return res.json();
  })
  .then(function(data) {
  
    var userRequest = data.request;
      
      title = userRequest[0].title;
       description = userRequest[0].description;
      createdAt = showTime(userRequest[0].created_at);
    
      addRequest(title, description, createdAt);
     
  })
  .catch(function(error) {
    return console.log(error);
  });

}

function validateInput(){
  event.preventDefault();
  
  var title = titleEl.textContent;
  var description =describeEl.textContent;
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
    reqError.innerHTML = "Select a request type";
    
  } else {
    
    editRequest(title, description, requestType);
    
  }
}

function editNewRequest() {
  detailEl.innerHTML = 'Edit Request';
  detailDiv.style.display="block";
  
  editBox.style.display = 'block';
  detailBox.style.display = 'none';
 
  
  titleEl.setAttribute("contenteditable", true);
  titleEl.focus();
  describeEl.setAttribute("contenteditable", true);
  
  document.getElementById('time').style.display= "none";
  
}
function editRequest(title, description, requestType){
  console.log(requestId);
  
  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/users/requests/'+requestId, {
    method: 'PUT',
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

function deleteRequest(){
 
  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/users/requests/'+requestId, {
    method: 'DELETE',
    headers: new Headers({
       
        'authentication': userSession.token
    }),
   
}).then(function (res) {
 if (res.status == 200) window.location.href = "../html/profile.html";
  return res.json();
})
.then(function(data) {
  return data;
})
.catch(function(error) {
  return error;
});
}

function jsonResponse(res) {
  console.log(res);
       if (res.status == 200 || res.status == 201) {
         
    }  else if(res.status == 400) {
      document.getElementById('req-error').innerHTML = "There was a problem editing your request";
     
}
return res.json();
}

function loadProfile (data) {
  if (data.request){
 window.location.href = "../html/profile.html";
  return console.log(data);
  }
}
function logError (err) {
  return console.log(err);
}

function addRequest(title, description, createdAt){
  var titleEl = document.getElementById('title');
  var describeEl = document.getElementById('describe');
  var timeEl = document.getElementById('time');
  titleEl.innerHTML = title;
  describeEl.innerHTML = description;
  timeEl.innerHTML = createdAt;
}

var userSession = {
  token: localStorage.getItem('authentication'),

  }

 