var firstRequest = document.getElementById('first-req');
var status = document.getElementById('status');

function getRequests(){
  var token = localStorage.getItem('authentication');
  //var ul = document.getElementById('get-req'); // Get the list where we will place our authors
   
  return fetch('http://localhost:3000/api/v2/users/requests', {
      method: 'GET',
      headers: new Headers({
          'authentication': token
      }),
     
  }).then(function (res) {
    return res.json();
  })
  .then(function(data) {
    for (var i = 0; i <= 10; i++) {
      let title = data[i].title;
      let status = data[i].Description;
      let request =  addReq(title, status);
      document.getElementById('get-req').appendChild(request);
  }
    return console.log(data.length);
  })
  .catch(function(error) {
    return console.log(error);
  });

}

var title = data.user[i].title;
      var status = data.user[i].status;
var userSession = {
  token: localStorage.getItem('authentication'),
  name: localStorage.getItem('name')
  }
 
function addReq(title, status) {
  //var li = document.getElementById("get-req");
  var li = document.createElement("li");
  var link = document.createElement("a");
  var span = document.createElement("span");
  link.innerText = title;
  span.innerText = status;
  //link.setAttribute('href', 'http://www.google.it');
  link.appendChild(span)
  li.appendChild(link);
  return li;
}