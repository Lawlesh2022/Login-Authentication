function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == "admin" && password == "12345"){
        document.write("Login Successful");
           
    }
    else{
        document.write("Login Failled");
            
    }
    
}