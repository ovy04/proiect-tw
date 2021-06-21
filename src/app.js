const http = require('http');
const url = require('url');
const fs = require('fs');
//const api_hostname = "localhost";
const hostname = '127.0.0.1';
//const api_port = 3000;
const port = 5000;


const PerfumeController = require('./api/controllers/perfumeController');
const ClientController = require('./api/controllers/clientController');
const CommandController = require('./api/controllers/commandController');


const server = http.createServer(async (req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const reqUrl = url.parse(req.url);
    const path = reqUrl.pathname;
    res.statusCode = 200;
    await routing(path, res, req);
});

function routing(path, res, req){
    console.log(path);
    switch (path){
        //api routes
        case '/api/perfumes/add' : return PerfumeController.api_add_perfume(res,req);
        case '/api/perfumes/getAll' : return PerfumeController.api_get_all(res,req);
        case '/api/perfumes/getWhere' : return PerfumeController.api_get_all_where(res,req);
        case '/api/perfumes/update' : return PerfumeController.api_update_perfume(res, req);

        case '/api/commands/add' :  return CommandController.api_add_commands(res,req);
        case '/api/commands/getAll' : return CommandController.api_get_all(res,req);

        case '/api/clients/signup' : return ClientController.api_signup(res, req);
        case '/api/clients/login' : return ClientController.api_login(res,req);
        case '/api/clients/email' : return ClientController.api_update_email(res,req);
        case '/api/clients/name' : return ClientController.api_update_name(res,req);
        case '/api/clients/prenume' : return ClientController.api_update_prenume(res,req);



        //app routes
        case '/' : redirectHTML(res,"./app/public/html/produse.html"); break;
        case '/favicon.ico' : break;
        case '/contact.html' : redirectHTML(res,"./app/public/html/contact.html"); break;
        case '/report.html' : redirectHTML(res,"./app/public/html/report.html"); break;
        case '/profile.html' : redirectHTML(res,"./app/public/html/profile.html"); break;
        case '/produse.html' : redirectHTML(res,"./app/public/html/produse.html"); break;
        case '/login.html' : redirectHTML(res,"./app/public/html/login.html"); break;
        case '/signup.html' : redirectHTML(res,"./app/public/html/signup.html"); break;
        case '/editEmail.html' : redirectHTML(res,"./app/public/html/editEmail.html"); break;
        case '/editNume.html' : redirectHTML(res,"./app/public/html/editNume.html"); break;
        case '/admin-statistics.html' : redirectHTML(res,"./app/public/html/admin-statistics.html"); break;
        case '/item.html' : redirectHTML(res,"./app/public/html/item.html"); break;
        case '/styles/style_index.css' : redirectCSS(res,"./app/public/styles/style_index.css"); break;
        case '/styles/report.css' : redirectCSS(res,"./app/public/styles/report.css"); break;
        case '/services/signup.js' : redirectJS(res,"./app/public/services/signup.js"); break;
        case '/services/login.js' : redirectJS(res,"./app/public/services/login.js"); break;
        case '/services/display-products.js' : redirectJS(res,"./app/public/services/display-products.js"); break;
        case '/services/display-perfume.js' : redirectJS(res,"./app/public/services/display-perfume.js"); break;
        case '/logic/Perfume.js' : redirectJS(res,"./app/logic/Perfume.js"); break;
        case '/services/image-chooser.js' : redirectJS(res,"./app/public/services/image-chooser.js"); break;
        case '/services/change-email-name.js' : redirectJS(res,"./app/public/services/change-email-name.js"); break;
        case '/services/admin-statistics.js' : redirectJS(res,"./app/public/services/admin-statistics.js"); break;

    }

    //route images
    if(path.endsWith(".jpg")){
        let loc = __dirname  + "/app/public" + path;
        redirectPNG(res, loc);
    }
    if(path.endsWith(".png")){
        let loc = __dirname  + "/app/public" + path;
        redirectJPG(res, loc);
    }
}

function redirectJPG(res, path){
    fs.readFile(path, function (err, page) {
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.write(page);
        res.end();
    });
}

function redirectPNG(res, path){
    fs.readFile(path, function (err, page) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(page);
        res.end();
    });
}

function redirectHTML(res, path) {
    fs.readFile(path, function (err, html) {
        if (err) {
            throw err;
        }
        res.write(html);
        res.end();
    });
}

function redirectJS(res, path) {
    fs.readFile(path, function (err, page) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(page);
        res.end();
    });
}

function redirectCSS(res, path) {
    fs.readFile(path, function (err, page) {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(page);
        res.end();
    });
}



//server start
server.listen(port,hostname,()=> {
    console.log(`App server running on port...${port}`)
});
