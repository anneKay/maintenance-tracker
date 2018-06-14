function logoutUser () {
  localStorage.clear;
  window.location.href="../html/index.html";
  return;
}
var userSession = {
  token: localStorage.getItem('authentication')
}