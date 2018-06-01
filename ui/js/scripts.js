
function validateLogin(){

    event.preventDefault();
    var usernameValue = document.getElementById('username').value;
    var passValue = document.getElementById('password').value;
	if (usernameValue.length === 0) {
		document.getElementById('error-password').innerHTML = "";
        document.getElementById('username').focus();
        document.getElementById('error-username').innerHTML = "username cannot be empty";
	} else if (passValue.length < 5) {
		document.getElementById('error-username').innerHTML = "";
        document.getElementById('password').focus();
        document.getElementById('error-password').innerHTML = "password must be greater than 5";
    } else{
        displayPage();
    }
}

function clickDiv() {
	
    window.location.href = "../html/requestdetails.html"
}

function displayPage(){
    if(document.getElementById('username').value === "admin"){
        window.location.href = "../html/admin.html";
    } else if(document.getElementById('username').value){
        window.location.href = "../html/profile.html";
    }
    
    
}

