
window.onload = function() {
  getAllRequests();
 };
 
 var userRequests;
 function getAllRequests(){
   
   var message = document.getElementById('user').innerHTML = 'Welcome Admin' ;
   var page = document.getElementById('paginate');
   return fetch('http://localhost:3000/api/v2/requests', {
       method: 'GET',
       headers: new Headers({
           'authentication': userSession.token
       }),
      
   }).then(function (res) {
     redirectUser(res);
     return res.json();
   })
   .then(function(data) {
     console.log(data)
      userRequests = data.allRequests;
      if (userRequests.length > 10) {
        page.style.display = "block";
        
      }
      
      if (!userRequests.length > 0){
     document.getElementById('req-header').innerHTML = 'No Request Found';
     
        page.style.visibility = "hidden";
      }
    changePage(1);
   //}
     
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
   name: localStorage.getItem('name'),
   
   }
 
 
function addReq(title, status, requesttype, id) {
 
  var div = document.createElement("DIV");
  div.className = 'col-1-3  remove-gutter-xs admin-requests';
  div.id = 'col-1-3';
  var link = document.createElement('a');
  var h3 = document.createElement("h3");
  var h5 = document.createElement("h5");
  var hr = document.createElement("hr");
  var h4 = document.createElement('h4');
  h3.innerHTML = capitalizeName(title);
  h5.innerHTML = status.toLowerCase();
  h4.innerHTML = requesttype;
  var queryString = "?id=" + id;
  link.href ="../html/requestdetails.html" + queryString;
  link.appendChild(h3);
 link.style.color = "black";
  div.appendChild(link);
  div.appendChild(h5);
  div.appendChild(hr);
  div.appendChild(h4);
  
  return div;
}

function filterRequest() {
  var input, ul, li, h5, i;
  var searchValue = document.getElementById("search").value.toLowerCase();
  
 // ul = document.getElementById("get-req");
 divRow = document.getElementById('row');
 divCol = divRow.getElementsByTagName('DIV');
  //li = ul.getElementsByTagName("li");
  for (i = 0; i < divCol.length; i++) {
      h5 = divCol[i].getElementsByTagName("h5")[0];
      if (h5.innerHTML.indexOf(searchValue) > -1) {
          divCol[i].style.display = "";
      } else {
          divCol[i].style.display = "none";

      }
  }
}
 
 
function changePage(page)
{
    var btn_next = document.getElementById("next");
    var btn_prev = document.getElementById("prev");
    var row = document.getElementById("row");
  
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    row.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < userRequests.length; i++) {
        
      var title = userRequests[i].title;
      var status = userRequests[i].status;
      var createdAt = showTime(userRequests[i].created_at);
      var id = userRequests[i].id;
      var requests = userRequests;
      
      var adminReq = addReq(title, status, createdAt, id);
      
      row.appendChild(adminReq);
    }
   
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
