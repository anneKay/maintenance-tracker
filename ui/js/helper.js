function logoutUser () {
  localStorage.clear();
  window.location.href="../html/index.html";
  return;
}
var userSession = {
  token: localStorage.getItem('authentication'),
  requests: localStorage.getItem('requests')
}
function showTime (dbdate) {
  var time = new Date().toString();
 
 
   var dateArr = (dbdate.substring(0, dbdate.indexOf("T")).split('-'));
  var currDateArr = (time.split(' '));
 
  var dateArray = {
    year: parseInt(dateArr[0]),
    month: showMonth(parseInt(dateArr[1])),
    day: parseInt(dateArr[2]), 
    year2: parseInt(currDateArr[3]),
    month2: (currDateArr[1]),
    day2: parseInt(currDateArr[2])
  }
 
  if (dateArray.month == dateArray.month2 && dateArray.year == dateArray.year2 && dateArray.day == dateArray.day2){
    console.log('Today');
   
    return 'Today';
  } else if (dateArray.year == dateArray.year2 && dateArray.month == dateArray.month2 && (dateArray.day2 - dateArray.day) == 1){
   
   return 'Yesterday';
  }  else if (dateArray.year == dateArray.year2 && dateArray.month == dateArray.month2 && (dateArray.day2 - dateArray.day) > 1){
  
   return ('' + dateArray.month + ' ' + dateArray.day);
  } else {
   return ('' + dateArray.month + ' ' + dateArray.day + ', ' + dateArray.year);
  }
  
}
function showMonth(monthVal){

switch(monthVal) {
  case 1 :
    return 'Jan';
    
  case 2 :
    return 'Feb';
  
  case 3 :
    return 'Mar';
    
  case 4 :
    return 'April';
  
  case 5 :
    return 'May';
    
  case 6 :
    return 'Jun';
  case 7 :
    return 'Jul';
  case 8 :
    return 'Aug';
  case 9 :
    return 'Sept';
  case 10 :
    return 'Oct';
  case 11 :
    return 'Nov';

  case 12 :
    return 'Dec';

  
  default:
    return 'No date found';
}
}


function capitalizeName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}