const signup_url = "http://127.0.0.1:5000/api/clients/signup";

function getResponses() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let birthday = document.getElementById("birth").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pw").value;

    let signup_json = {
        "prenume" : first_name,
        "nume" : last_name,
        "dateOfBirth" : birthday,
        "gender" : gender,
        "email" : email,
        "password" : password
    };

    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response = request.responseText;
            alert(response);
            if(response === "Signed in successfully!"){
                window.location.replace("http://127.0.0.1:5000/");
            }
        }
    }
    request.open("POST",signup_url,false);
    request.send(JSON.stringify(signup_json));
}
