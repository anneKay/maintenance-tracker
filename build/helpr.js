"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonResponse = jsonResponse;
exports.logData = logData;
exports.logError = logError;
function jsonResponse(res) {
  console.log(res);
  if (res.status == 200 || res.status == 201) {

    var authentication = res.headers.get("authentication");
    localStorage.setItem('authentication', authentication);

    window.location.href = "../html/profile.html";
  }
  return res.json();
}

function logData(data) {
  return console.log(data);
}
function logError(ferr) {
  return console.log(err);
}
