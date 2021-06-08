form.addEventListener('submit', (event) => {

    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'Include/loginaction.php');

    let data = new FormData(form);

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // send request
    xhr.send(data);

    // listen for `load` event
    xhr.onload = () => {
        console.log(xhr.responseText);
    }
    
});