
function validateLogin(){

    event.preventDefault();
    var usernameValue = document.getElementById('username').value;
    var passValue = document.getElementById('password').value;
    if (usernameValue.length === 0 ){
        document.getElementById('username').focus();
        document.getElementById('error-text').innerHTML = "username cannot be empty";
    } else if (passValue.length < 5){
        document.getElementById('password').focus();
        document.getElementById('error-text').innerHTML = "password must be greater than 5";
    } else{
        displayPage();
    }
}

function validateSignUp(){
    event.preventDefault();

}


function displayPage(){
    if(document.getElementById('username').value === "admin001"){
        window.location.href = "../html/admin.html";
    } else if(document.getElementById('username').value){
        window.location.href = "../html/profile.html";
    }
    
    
}
