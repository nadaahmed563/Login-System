if (localStorage.getItem('Accounts') != null) {
    signUpContainer = JSON.parse(localStorage.getItem('Accounts'));
}
else {
    signUpContainer = [];
}

var emailInputSignIn = document.getElementById("emailSignIn");
var passInputSignIn = document.getElementById("passSignIn");
var alert = document.getElementById("alert");
var loginBtn = document.getElementById("loginBtn");
var signUpName = document.getElementById("signUpName");
var emailInputSignUP = document.getElementById("emailSignUP");
var passInputSignUP = document.getElementById("passSignUP");
var signUpBtn = document.getElementById("signUpBtn");
var alertEmail = document.getElementById("alertEmail");
var successAlert = document.getElementById("Success");
var alertLogin = document.getElementById("alertLogin");


var signUpContainer;

var userNames = localStorage.getItem('Usernames');
if (userNames) 
{
    document.getElementById('usernames').innerHTML = "Welcome"+ " " + userNames;
   
}

function signUpButton() {
    if (errorSignUp() == false) {
        alert.classList.add("d-block");
        alert.classList.remove("d-none");

        return false
    }
    var signUp = {
        name: signUpName.value,
        email: emailInputSignUP.value,
        password: passInputSignUP.value,
    }
    if (signUpContainer.length == 0) {
        signUpContainer.push(signUp)
        localStorage.setItem('Accounts', JSON.stringify(signUpContainer))
        successAlert.classList.replace('d-none' , 'd-block');
        alert.classList.replace("d-block" , "d-none");
        clear();

        return true
    }
    if (checkRepeatAcount() == false) {
        alertEmail.classList.replace('d-none' , 'd-block')
        successAlert.classList.replace('d-block' , 'd-none')


    } else {
        signUpContainer.push(signUp)
        localStorage.setItem('Accounts', JSON.stringify(signUpContainer))
        successAlert.classList.replace('d-none' , 'd-block')
        alert.classList.replace("d-block" , "d-none");

    }


}
function clear() {
    signUpName.value = "";
    passInputSignUP.value = "";
    emailInputSignUP.value = "";
}
function checkRepeatAcount()
{
    for (var i = 0; i < signUpContainer.length; i++) 
    {
        if (signUpContainer[i].email.toLowerCase() == emailInputSignUP.value.toLowerCase()) {
            return false;
        }
    }

}
function errorSignUp() 
{

    if (signUpName.value == "" || emailInputSignUP.value == "" || passInputSignUP.value == "") 
    {
        return false
    } 
    else 
    {
        return true
    }
}

function errorLogin() 
{

    if (emailInputSignIn.value == "" || passInputSignIn.value == "") 
    {
        return false
    } 
    else 
    {
        return true
    }
}

function login() 
{
    if (errorLogin() == false) 
    {
        alert.classList.add("d-block");
        alert.classList.remove("d-none");
        return false
    }
    // else
    // {
    //     for (var i = 0; i < signUpContainer.length; i++)
    //     {
    //         if (signUpContainer[i].email.toLowerCase() == emailInputSignIn.value.toLowerCase() && signUpContainer[i].password.toLowerCase() == passInputSignIn.value.toLowerCase())
    //         {
    //             // localStorage.setItem('Usernames', signUpContainer[i].name);
    //             // window.open("html/welcome.html");
    //             console.log("hello");


    //         }
    //         else
    //         {
    //             alertLogin.classList.replace('d-none' , 'd-block');
    //             alert.classList.replace("d-block" , "d-none");
    //         }
            
    //     }
    // }

    var password = passInputSignIn.value;
    var email = emailInputSignIn.value;
    for (var i = 0; i < signUpContainer.length; i++) 
    {
        
        if (signUpContainer[i].email.toLowerCase() == email.toLowerCase() && signUpContainer[i].password.toLowerCase() == password.toLowerCase()) 
        {
          window.open("html/welcome.html");
          alertLogin.classList.replace('d-block' , 'd-none');
          localStorage.setItem('Usernames', signUpContainer[i].name)
        } 
        else
        {
            alertLogin.classList.replace('d-none' , 'd-block');
            alert.classList.replace("d-block" , "d-none");
        }

    }

}
function logout() {
    window.open("../index.html")
}

