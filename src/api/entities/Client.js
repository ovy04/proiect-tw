const Sequelize = require('sequelize');
const db = require('../config/database.config');
const {INTEGER} = require("sequelize");

const clientSchema = {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    prenume: {
        type: String
    },
    nume: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}


const ClientModel = db.define('client',clientSchema,{
    timestamps : false,
    createdAt: false,
    updatedAt: false
});
module.exports = () => ClientModel;