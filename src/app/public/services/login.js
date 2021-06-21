let login_url = "http://127.0.0.1:5000/api/clients/login";
function getLoginResponses(){
    let email = document.getElementById("lemail").value;
    let password = document.getElementById("lpassword").value;
    let login_json = {
        "email" : email,
        "password" : password
    };

    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response = request.responseText;
            alert(response);
            if(response === "Logged in successfully!"){
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("email", email);
                window.location = "http://127.0.0.1:5000/produse.html";
            }else{
                localStorage.setItem("loggedIn","false");
            }
        }
    }
    request.open("POST",login_url,false);
    request.send(JSON.stringify(login_json));

}
