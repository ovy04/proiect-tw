let email_url = "http://127.0.0.1:5000/api/clients/email";
let name_url = "http://127.0.0.1:5000/api/clients/name";
let prenume_url = "http://127.0.0.1:5000/api/clients/prenume";
function change_email() {
    let old_email = document.getElementById("oldEmail").value;
    let new_email = document.getElementById("newEmail").value;


    if(localStorage.getItem("email") !== old_email){
      alert("Email gresit!");
      return;
    }

    localStorage.setItem("email", new_email);

    let json = {
        "newEmail" : new_email,
        "oldEmail" : old_email
    };

    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response = request.responseText;
            alert(response);
        }
    }
    request.open("POST",email_url,false);
    request.send(JSON.stringify(json));
}

function change_name() {
    let old_name = document.getElementById("oldName").value;
    let new_name = document.getElementById("newName").value;

    let json = {
        "newName" : new_name,
        "oldName" : old_name
    };

    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response = request.responseText;
            alert(response);
        }
    }
    request.open("POST",name_url,false);
    request.send(JSON.stringify(json));
}

function change_prenume() {
    let old_name = document.getElementById("oldPrenume").value;
    let new_name = document.getElementById("newPrenume").value;

    let json = {
        "newPrenume" : new_name,
        "oldPrenume" : old_name
    };

    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response = request.responseText;
            alert(response);
        }
    }
    request.open("POST",prenume_url,false);
    request.send(JSON.stringify(json));
}
