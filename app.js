function validation(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conformpass = document.getElementById('conpass').value;
    var mobilenumber = document.getElementById('mobilenumber').value;
    var emails = document.getElementById('emails').value;






    if(user == ""){
        document.getElementById('username').innerHTML = "**please fill the username feild";
        return false;
    }

if((user.length <= 2)|| (user.length > 20)){
    document.getElementById('username').innerHTML = "**user length must be between 2 and 20";
        return false;
}
if(!isNaN(user)){
    document.getElementById('username').innerHTML = "**only character are allowed";
        return false;
}





    if(pass == ""){
        document.getElementById('passwords').innerHTML = "**please fill the password feild";
        return false;
    }
    if((pass.length <= 5)|| (user.length > 20)){
        document.getElementById('passwords').innerHTML = "**password length must be between 5 and 20";
            return false;
    }
    if(pass!= conformpass){
        document.getElementById('conformpass').innerHTML = "**password are not matching";
            return false;
    }






    if(conformpass == ""){
        document.getElementById('conformpass').innerHTML = "**please fill the conformpass feild";
        return false;
    }
    if(mobilenumber == ""){
        document.getElementById('mobileno').innerHTML = "**please fill the mobile number feild";
        return false;
    }

 if (isNaN(mobilenumber)){
    document.getElementById('mobileno').innerHTML = "**user must write digit only not character";
        return false;
 }
 if(mobilenumber.length!=10){
    document.getElementById('mobileno').innerHTML = "**mobile number must be 10 digit";
        return false;
 }




    if(emails == ""){
        document.getElementById('emailids').innerHTML = "**please fill the email idfeild";
        return false;
    }

if(emails.indexof('@') <= 0){
    document.getElementById('emailids').innerHTML = "**@ invalid position";
        return false;

}
if  ((emails.chartAt(emails.length-4)!='.') &&  (emails.chartAt(emails.length-3)!='.')){
    document.getElementById('emailids').innerHTML = "**. invalid position";
    return false;
}

}
function clickbtn(){
    alert("submitform")
}





