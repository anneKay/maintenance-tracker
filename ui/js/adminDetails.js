window.onload = function() {
  getSingleRequest();
 };
 var requestId;
function getSingleRequest(){
 
  var queryString = decodeURIComponent(window.location.search);
  
queryString = queryString.substring(1);
var queries = queryString.split("=");
requestId = (queries[1]);

  return fetch('http://localhost:3000/api/v2/users/requests/'+requestId, {
      method: 'GET',
      headers: new Headers({
          'authentication': userSession.token
      }),
     
  }).then(function (res) {
    return res.json();
  })
  .then(function(data) {
   console.log(data);
    var userRequest = data.request;
      
      title = userRequest[0].title;
       description = userRequest[0].description;
       console.log(userRequest[0].created_at);
      createdAt = showTime(userRequest[0].created_at);
      console.log(createdAt)
      status = userRequest[0].status;
      requesttype = userRequest[0].requesttype;
      console.log(title, description, createdAt)
      addRequest(title, description, createdAt, status, requesttype);
   
     
  })
  .catch(function(error) {
    return console.log(error);
  });

}
var errorMessage;
function approveRequest(){
 
  return fetch('http://localhost:3000/api/v2/requests/'+requestId+'/approve', {
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

function disapproveRequest(){
 
  return fetch('http://localhost:3000/api/v2/requests/'+requestId+'/disapprove', {
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

function resolveRequest(){
 
  return fetch('http://localhost:3000/api/v2/requests/'+requestId+'/resolve', {
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
  console.log(res);
       if (res.status == 200 || res.status == 201) {
         
    }  else if(res.status == 409) {
      //document.getElementById('admin-error').innerHTML = "Incorrect Email or Password";
     
}
var err = document.getElementById('admin-error').innerHtml = 'error';
 
return res.json();
}

function logData (data) {
  if(data.error){
  document.getElementById('admin-error').innerHTML = data.error;
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



// function showTime (dbDate) {
//   var time = new Date().toString();
 

//    var dateArr = (dbDate.substring(0, dbDate.indexOf("T")).split('-'));
//   var currDateArr = (time.split(' '));
 
//   var dateArray = {
//     year: parseInt(dateArr[0]),
//     month: showMonth(parseInt(dateArr[1])),
//     day: parseInt(dateArr[2]), 
//     year2: parseInt(currDateArr[3]),
//     month2: (currDateArr[1]),
//     day2: parseInt(currDateArr[2])
//   }
 
//   if (dateArray.month == dateArray.month2 && dateArray.year == dateArray.year2 && dateArray.day == dateArray.day2){
//     console.log('Today');
   
//     return 'Today';
//   } else if (dateArray.year == dateArray.year2 && dateArray.month == dateArray.month2 && (dateArray.day2 - dateArray.day) == 1){
   
//    return 'Yesterday';
//   }  else if (dateArray.year == dateArray.year2 && dateArray.month == dateArray.month2 && (dateArray.day2 - dateArray.day) > 1){
  
//    return ('' + dateArray.month + ' ' + dateArray.day);
//   } else {
//    return ('' + dateArray.month + ' ' + dateArray.day + ', ' + dateArray.year);
//   }
  
// }
// function showMonth(monthVal){

// switch(monthVal) {
//   case 1 :
//     return 'Jan';
    
//   case 2 :
//     return 'Feb';
  
//   case 3 :
//     return 'Mar';
    
//   case 4 :
//     return 'April';
  
//   case 5 :
//     return 'May';
    
//   case 6 :
//     return 'Jun';
//   case 7 :
//     return 'Jul';
//   case 8 :
//     return 'Aug';
//   case 9 :
//     return 'Sept';
//   case 10 :
//     return 'Oct';
//   case 11 :
//     return 'Nov';

//   case 12 :
//     return 'Dec';

  
//   default:
//     return 'No date found';
// }
// }
