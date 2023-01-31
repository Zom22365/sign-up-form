let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("password");
let conPassword = document.getElementById("conPassword");
var regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
var regexPhone = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g);
function Check(){
    if(firstName.value==""){
        document.getElementById("error-null").innerHTML="*You must enter your first name";
        firstName.style.border="1px solid red";
    }

    if(lastName.value==""){
        document.getElementById("nullLastName").innerHTML="*You must enter your last name";
        lastName.style.border="1px solid red";
    }

    if(email.value==""){
        document.getElementById("errorEmail").innerHTML="*You must enter your email";
        email.style.border="1px solid red";
    }else if(!regex.test(email.value)){
        document.getElementById("errorEmail").innerHTML="Invalid email adress";
        email.style.border="1px solid red";
    }

    if(number.value==""){
        document.getElementById("errorNumber").innerHTML="*You must enter your phone number";
        number.style.border="1px solid red";
    }else if(!regexPhone.test(number.value)){
        document.getElementById("errorNumber").innerHTML="Invalid phone number";
        number.style.border="1px solid red";
    }
    
    if(password.value==""){
        document.getElementById("errorPass").innerHTML="*You must enter password";
        password.style.border="1px solid red";
    }else if(password.value!==conPassword.value){
        document.getElementById("errorPass").innerHTML="*Passwords do not match";
        conPassword.innerHTML="";
        password.style.border="1px solid red";
    }
}