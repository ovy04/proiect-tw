const ClientService = require("../services/clientService");
let credentials;
let emails;
let names;
module.exports = class Client {

    static async api_login(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                credentials = JSON.parse(data);
                console.log(credentials);
            });

            let client = await ClientService.login(credentials.email, credentials.password);

            if (client.toString() !== "") {
                res.write("Logged in successfully!");
            } else {
                res.write("Bad credentials!");
            }
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        } finally {
            res.end();
        }
    }

    static async api_signup(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                credentials = JSON.parse(data);
                console.log(credentials);
            });

            let status = await ClientService.signup(credentials.prenume, credentials.nume, credentials.dateOfBirth, credentials.gender, credentials.email, credentials.password);
            console.log(status);
            if (status === "success") {
                res.write("Signed in successfully!");
            } else {
                res.write("Could not register user!");
            }
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        } finally {
            res.end();
        }
    }

    static async api_update_email(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                emails = JSON.parse(data);
            });
            let status = await ClientService.updateEmail(emails.newEmail, emails.oldEmail);
            console.log(status);
            if (status === "success") {
                res.write("Email modified successfully!");
            } else {
                res.write("Could not modify email!");
            }
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        } finally {
            res.end();
        }
    }

    static async api_update_name(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                names = JSON.parse(data);
                console.log(names);
            });
            let status = await ClientService.updateName(names.newName, names.oldName);
            console.log(status);
            if (status === "success") {
                res.write("Name modified successfully!");
            } else {
                res.write("Could not modify name!");
            }
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        } finally {
            res.end();
        }
    }

    static async api_update_prenume(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                names = JSON.parse(data);
                console.log(names);
            });
            let status = await ClientService.updatePrenume(names.newName, names.oldName);
            console.log(status);
            if (status === "success") {
                res.write("Prenume modified successfully!");
            } else {
                res.write("Could not modify prenume!");
            }
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        } finally {
            res.end();
        }
    }



}