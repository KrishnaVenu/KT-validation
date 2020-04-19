function validate(){
    let firstname = document.forms['firstname'];
    let lasttname = document.forms['lastname'];
    let email = document.forms['email'];
    let pno = parseInt(document.forms['pno']);
    let pwd = document.forms['pwd'];
    let regexpemail=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
 let upperCaseLetters ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$";
 let regexppno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

 if firstname.value==""||lastname.value==""){
     alert("Firstname must be filled out");
     document.forms['firstname']||['lastname'].focus();
     return false;
 }
 else if(email.value==""){
    alert("Email must be filled out");
    document.forms['email'].focus();
    return false;
 }
 else if(!regexpemail.test(email)){
     alert("Enter a valid email");
     document.forms['email'].focus();
     return false;
 }
 else if(pno.value==""){
     alert("Phone Number must be filled out");
     document.forms["pno"].focus();
     return false;
 }
 else if(!regexppno.test(pno)){
     alert("Enter a valid phone number");
     document.forms['pno'].focus();
     return false;
 }
 else if(pwd==""){
     alert("Password must be filled out");
     document.forms['pwd'].focus();
     rerturn false;
 }
 else if(!pwd.match[upperCaseLetters]){{
     document.forms['pwd'].focus();
     alert("Password should contain at least one number, one lower and one upper case letter");
     return false;
 }

}