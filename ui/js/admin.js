
window.onload = function() {
  getAllRequests();
 };
 
 
 function getAllRequests(){
   
   var message = document.getElementById('user').innerHTML = 'Welcome ' ;
   return fetch('http://localhost:3000/api/v2/requests', {
       method: 'GET',
       headers: new Headers({
           'authentication': userSession.token
       }),
      
   }).then(function (res) {
     return res.json();
   })
   .then(function(data) {
     console.log(data)
     var userRequests = data.allRequests;
     console.log(userRequests.length);
     
     for (var i = 0; i < userRequests.length ; i++) {
       
       var title = userRequests[i].title;
       var status = userRequests[i].status;
       var requesttype = userRequests[i].requesttype;
       
       var adminReq = addReq(title, status, requesttype);
       document.getElementById('row').appendChild(adminReq);
       
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
  
 
function addReq(title, status, requesttype) {
 
  var div = document.createElement("DIV");
  div.className = 'col-1-3  remove-gutter-xs admin-requests';
  div.id = 'col-1-3';
  var h3 = document.createElement("h3");
  var h5 = document.createElement("h5");
  var anotherh3 = document.createElement('h5');
  var hr = document.createElement("hr");
  var h4 = document.createElement('h4');
  h3.innerHTML = title;
  h5.innerHTML = status;
  h4.innerHTML = requesttype;
  
  div.appendChild(h3);
  div.appendChild(h5);
  div.appendChild(hr);
  div.appendChild(h4)
  return div;
}

 
 
 