const Sequelize = require('sequelize');
const db = require('../config/database.config');
const {INTEGER} = require("sequelize");

const perfumeSchema = {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    nume: {
        type: String
    },
    quantity: {
        type: INTEGER,
    },
    ingredients: {
        type: String
    },
    price: {
        type: String
    },
    size: {
        type: INTEGER
    },
    tags: {
        type: String
    },
    relatedPerfumes: {
        type: String
    },
    ocazie:{
        type: String
    },
    season:{
        type: String
    },
    sex:{
        type: String
    }
}


const PerfumeModel = db.define('perfume',perfumeSchema,{
    timestamps : false,
    createdAt: false,
    updatedAt: false
});
module.exports = () => PerfumeModel;