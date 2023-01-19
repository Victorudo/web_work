function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Succesfull");
        window.location.replace("RESTAURANT WEBSITE/index.html");
        return false;
    }
    else{
        alert("alaye put details");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}