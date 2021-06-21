const ClientModel = require("../entities/Client");
const Sequelize = require('sequelize');
const db = require('../config/database.config');
const Client = ClientModel(db, Sequelize);

module.exports = class ClientService {

    /* LOGIN */
    static async login(email, password) {
        try {
            return await Client.findAll({
                where: {
                    email: email,
                    password: password
                }
            });
        } catch (error) {
            console.log(`Could not find clients ${error}`);
        }
    }

    /* SIGNUP */
    static async signup(prenume, nume, dateOfBirth, gender, email, password) {
        try {
            const newClient = {
                "id": null,
                "prenume": prenume,
                "nume": nume,
                "dateOfBirth": dateOfBirth,
                "gender": gender,
                "email": email,
                "password": password
            };
            await Client.create(newClient);
            return "success";
        } catch (error) {
            console.log(`Could not find clients ${error}`);
            return "failure";
        }
    }

    /* UPDATE EMAIL */
    static async updateEmail(newEmail, oldEmail) {
        try {
            let result = await Client.update({
                    "email": newEmail
                },
                {
                    where:
                        {
                            "email": oldEmail
                        }
                });

            if (result.toString() === "1") {
                return "success";
            }
            return "failure";

        } catch (error) {
            console.log(`Error updating client ${error}`);
            return "failure";
        }
    }

    /* UPDATE NAME */
    static async updateName(newName, oldName) {
        try {
            let result = await Client.update({
                    "nume": newName
                },
                {
                    where:
                        {
                            "nume": oldName
                        }
                });

            if (result.toString() === "1") {
                return "success";
            }
            return "failure";

        } catch (error) {
            console.log(`Error updating client ${error}`);
            return "failure";
        }
    }

    /* UPDATE PRENUME */
    static async updatePrenume(newName, oldName) {
        try {
            let result = await Client.find({
                    "prenume": oldName
                }).on('success',function (client){
                    if(client){
                        client.update({
                            "prenume" : newName
                        })
                    }
                });
            console.log(result);
            if (result.toString() === "1") {
                return "success";
            }
            return "failure";

        } catch (error) {
            console.log(`Error updating client ${error}`);
            return "failure";
        }
    }


}