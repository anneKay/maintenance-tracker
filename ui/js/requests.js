
window.onload = function() {
  getRequests();

};

var firstRequest = document.getElementById('first-req');
var status = document.getElementById('status');
var userRequests;

function getRequests() {

  var ul = document.getElementById('get-req');
  var page = document.getElementById('paginate');
  var message = document.getElementById('welcome').innerHTML = 'Welcome ' + capitalizeName(userSession.name);
  return fetch('https://mtracker-nwanna.herokuapp.com/api/v2/users/requests', {
    method: 'GET',
    headers: new Headers({
      'authentication': userSession.token
    }),

  }).then(function (res) {
    redirectUser(res);
    return res.json();
  })
    .then(function(data) {
      userRequests = data.requests;

      if (!userRequests.length > 0){
        document.getElementById('req-header').innerHTML = 'No Request Yet';
        page.style.display = 'none';
      }
      if (userRequests.length > 10) {
        page.style.display = 'block';

      }
      changePage(2);

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

  link.innerText = capitalizeString(title);
  span.innerText = status.toLowerCase();

  link.appendChild(span);
  li.appendChild(link);
  return li;
}


function statusBackground(status, span) {
  console.log(status);
  switch (status) {
    case 'pending':
      span.className = 'pull-right progress';
      break;
    case 'rejected':
      span.className = 'pull-right rejected';
      break;
    case 'approved':
      span.className = 'pull-right accepted';
      break;
    default:
      span.className = 'pull-right progress';
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

function changePage(page) {
  var btn_next = document.getElementById("next");
  var btn_prev = document.getElementById("prev");
  var ul = document.getElementById("get-req");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  ul.innerHTML = "";

  for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < userRequests.length; i++) {
    var title = userRequests[i].title;
    var status = userRequests[i].status;
    var id = userRequests[i].id;
    var request =  addReq(title, status, id);

    ul.appendChild(request);
  }
  btn_prev.style.visibility = "hidden";
  if (page === 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.display = "visible";
  }

  if (page === numPages()) {
    btn_next.style.visibility = "hidden";
    btn_prev.style.visibility = "visible";
  } else {
    btn_next.style.visibility = "visible";
  }
}
