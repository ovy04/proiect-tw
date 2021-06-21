const CommandModel = require("../entities/Command");
const Sequelize = require('sequelize');
const db = require('../config/database.config');
const Command = CommandModel(db, Sequelize);

module.exports = class CommandService {

    /* ADD NEW COMMAND */
    static async add_new_command(clientId, products, address, isPresent) {
        try {
            const newCommand = {
                "id" : null,
                "clientId" : clientId,
                "products" : products,
                "address" : address,
                "isPresent" : isPresent,
            };
            await Command.create(newCommand);
            return "success";
        } catch (error) {
            console.log(`Could not add command ${error}`);
            return "failure";
        }
    }

    /* GET ALL COMMANDS*/
    static async get_all_commands(){
        try{
            let all_commands = await Command.findAll();
            return all_commands;
        }catch (error){
            console.log(`Commands not found. ${error}`)
        }
    }



}