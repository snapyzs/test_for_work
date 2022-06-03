const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const Note = sequelize.define('note',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, require: true},
    description: {type: DataTypes.STRING, require: true},
})

module.exports = {
    Note,
}