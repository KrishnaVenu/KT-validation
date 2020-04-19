




function validate(){
    let email=document.getElementById("email");
    let label=document.getElementById("check");
    let regexp=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(regexp.test(email.value)){
        label.innerHTML="Valid";
        label.style.color="green";
        label.style.visibility="visible";
        return true;
    }
    else{
        label.innerHTML="Invalid";
        label.style.color="red";
        label.style.visibility="visible";
        return false;
    }
}

function validatePassword(){
    let pwd=document.getElementByI("pwd");
    let label=document.getElementById("find");
    let strongregexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
    let mediumRegex =/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})$/;
    if(strongregexp.password(pwd.value)){
        label.innerHTML="Valid";
        label.style.color="green";
        label.style.visibility="visible";
        return true;
    }
    else{
        label.innerHTML="Invalid";
        label.style.color="red";
        label.style.visibility="visible";
        return false;
    }
}

if(email.value==""){
    alert("Email cannot be empty");
    return false;
}
else if(pwd==""){
alert("Password cannot be empty");
return false;
}
else if(pwd.length<=5){
    alert("Password is too short");
    pwd.style.border="2px solid red";
    return false;
}
else{
    return true;
}