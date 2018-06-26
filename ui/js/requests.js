
window.onload = function() {
 getRequests();
};

var firstRequest = document.getElementById('first-req');
var status = document.getElementById('status');

function getRequests(){
  
  var ul = document.getElementById('get-req'); 
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
    
    for (var i = 0; i < userRequests.length ; ++i) {
      var newArray = {};
      var title = userRequests[i].title;
      var status = userRequests[i].status;
      var id = userRequests[i].id;
      var request =  addReq(title, status, id);
      newArray.title = title
      newArray.status = status;
      newArray.id = id;
      userSession.reqArray.push(newArray);
      
     
      document.getElementById('get-req').appendChild(request);
  }
  
  
  })
  .catch(function(error) {
    return console.log(error);
  });

}

function capitalizeName(string) {
return newString = (string.charAt(0).toUpperCase() + string.slice(1)).split(" ")[0];

}
const capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

var userSession = {
  token: localStorage.getItem('authentication'),
  name: localStorage.getItem('name'),
  reqArray: []
  }
 
function addReq(title, status, id) {
  
  var li = document.createElement("li");
 
  var link = document.createElement("a");
  var span = document.createElement("span");
  statusBackground(status, span);
  var queryString = "?id=" + id;
  link.href ="../html/userRequest.html" + queryString;
    
  link.innerText = capitalizeString(title) ;
  span.innerText = status.toLowerCase();
  
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
  case 'approved':
    span.className = 'pull-right-sm accepted';
}

}

function filterRequest() {
  var input, filter, ul, li, span, i;
  var searchValue = document.getElementById("search").value.toLowerCase();
  
  ul = document.getElementById("get-req");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      span = li[i].getElementsByTagName("span")[0];
      if (span.innerHTML.indexOf(searchValue) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";

      }
  }
}