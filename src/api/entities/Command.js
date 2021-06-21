const Sequelize = require('sequelize');
const db = require('../config/database.config');
const {INTEGER} = require("sequelize");

const commandSchema = {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    clientId: {
        type: INTEGER
    },
    products: {
        type: String
    },
    address: {
        type: String
    },
    isPresent:{
        type: String
    }
}

const CommandModel = db.define('command',commandSchema,{
    timestamps : false,
    createdAt: false,
    updatedAt: false
});
module.exports = () => CommandModel;