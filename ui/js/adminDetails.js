window.onload = function() {
  getSingleRequest();
 };
 var requestId;
 var reset = document.getElementById('reset');
 var approve = document.getElementById('approve');
 var reject = document.getElementById('reject');
 
 // fetch a single request by id
function getSingleRequest(){
 
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
     
      status = userRequest[0].status;
      requesttype = userRequest[0].requesttype;
     
      addRequest(title, description, createdAt, status, requesttype);
   if (status === 'pending'){
     reset.style.display = 'none';
   } else {
     approve.style.display = 'none';
     reset.style.display = 'block';
   }
     
  })
  .catch(function(error) {
    return console.log(error);
  });

}
var errorMessage;

//approve a single request by a user
function approveRequest(){
 
  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/requests/'+requestId+'/approve', {
    method: 'PUT',
    headers: new Headers({
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'authentication': userSession.token
    }),
    
   
}).then(jsonResponse)
  .then(logData)
.catch(logError);
}

//disapprove a single request by a user
function disapproveRequest(){
 
  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/requests/'+requestId+'/disapprove', {
    method: 'PUT',
    headers: new Headers({
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'authentication': userSession.token
    }),
    
   
}).then(jsonResponse)
  .then(logData)
.catch(logError);
}

//resolve a single request made by a user
function resolveRequest(){
 
  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/requests/'+requestId+'/resolve', {
    method: 'PUT',
    headers: new Headers({
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'authentication': userSession.token
    }),
    
}).then(jsonResponse)
  .then(logData)
.catch(logError);
}

//reset a request's status
function resetRequest(){

  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/requests/'+requestId+'/reset', {
    method: 'PUT',
    headers: new Headers({
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'authentication': userSession.token
    }),
    
   
}).then(jsonResponse)
  .then(logData)
.catch(logError);
}
function jsonResponse(res) {
      redirectUser(res);

return res.json();
}

function logData (data) {
  
  if(data.error){
  document.getElementById('admin-error').innerHTML = data.error;
  } else {
    document.getElementById('status').innerHTML = data.result.status;
    if(data.result.status === 'approved'){
      approve.style.display = 'none';
     reset.style.display = 'block';
      reset.style.marginLeft = "-0.7em";
    } else if (data.result.status === 'disapproved') {
      reject.style.display = 'none';
     reset.style.display = 'block';
     reset.style.marginLeft = "0.5em";
    } else if (data.result.status === 'pending'){
      reset.style.display = 'none';
      approve.style.display = 'block';
      reject.style.display = 'block'
    }
  }
  return console.log(data);
}
function logError (err) {
  return console.log(err);
}

var userSession = {
  token: localStorage.getItem('authentication'),

  }
  
function addRequest(title, description, createdAt,status, requesttype){
  var titleEl = document.getElementById('title');
  var describeEl = document.getElementById('describe');
  var timeEl = document.getElementById('time');
  var statusEl = document.getElementById('status');
  var reqType = document.getElementById('req-type');
  titleEl.innerHTML = title;
  describeEl.innerHTML = description;
  timeEl.innerHTML = createdAt;
  statusEl.innerHTML = status;
  reqType.innerHTML = requesttype;
}
