require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/routes');
const errorHanlde = require('./middleware/ErrorMiddleware');

const PORT = process.env.PORT;

const app = new express();
app.use(cors());
app.use(express.json());
app.use("/api",router);


app.use(errorHanlde);
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT,() => {
            console.log(`Starting on port ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();