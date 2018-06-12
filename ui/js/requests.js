
window.onload = function() {
 getRequests();
};

var firstRequest = document.getElementById('first-req');
var status = document.getElementById('status');

function getRequests(){
  
  var ul = document.getElementById('get-req'); // Get the list where we will place our authors
  var message = document.getElementById('welcome').innerHTML = 'Welcome ' + capitalizeName(userSession.name);
  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/users/requests', {
      method: 'GET',
      headers: new Headers({
          'authentication': userSession.token
      }),
     
  }).then(function (res) {
    return res.json();
  })
  .then(function(data) {
    var userRequests = data.requests;
    console.log(userRequests.length);
    
    for (var i = 0; i < userRequests.length ; i++) {
      
      var title = userRequests[i].title;
      var status = userRequests[i].status;
      
      var request =  addReq(title, status);
      document.getElementById('get-req').appendChild(request);
  }
    
  })
  .catch(function(error) {
    return console.log(error);
  });

}

function capitalizeName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var userSession = {
  token: localStorage.getItem('authentication'),
  name: localStorage.getItem('name')
  }
 
function addReq(title, status) {
  //var li = document.getElementById("get-req");
  var li = document.createElement("li");
  var link = document.createElement("a");
  var span = document.createElement("span");
  statusBackground(status, span);
 
  link.innerText = title;
  span.innerText = status;
  
  link.appendChild(span)
  li.appendChild(link);
  return li;
}

function statusBackground(status, span){
  console.log(status);
 
switch (status) {

  case 'pending':
    span.className = 'pull-right-sm progress';
    break;
  case 'rejected':
    span.className = 'pull-right-sm rejected';
    break;
  case 'accepted':
    span.className = 'pull-right-sm accepted';
}

}