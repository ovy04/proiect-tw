let perfumes_url = "http://127.0.0.1:5000/api/perfumes/getAll";
let perfumes_url_where = "http://127.0.0.1:5000/api/perfumes/getWhere";
let all_perfumes;
let season_perfumes;
let ocazie_perfumes;

function getPerfumes(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response_perfumes = request.responseText;
            all_perfumes = JSON.parse(response_perfumes);
        }
    }
    request.open("GET",perfumes_url,false);
    request.send();
}
function getProductsBySeason(season){
    let json = {
        "season" : season
    };
    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response_perfumes = request.responseText;
            season_perfumes = JSON.parse(response_perfumes);
        }
    }
    request.open("POST",perfumes_url_where,false);
    request.send(JSON.stringify(json));
}

function getProductsByOcazie(ocazie){
    let json = {
        "ocazie" : ocazie
    };
    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
            let response_perfumes = request.responseText;
            ocazie_perfumes = JSON.parse(response_perfumes);
        }
    }
    request.open("POST",perfumes_url_where,false);
    request.send(JSON.stringify(json));
}
