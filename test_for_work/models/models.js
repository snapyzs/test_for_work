const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,require: true},
    password: {type: DataTypes.STRING,require: true},
})

module.exports = {
    User,
}