require("dotenv").config();
const express = require("express");
const router = require("./routes/routes");
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api",router);

const start = async () => {
    try {
        app.listen(PORT,() => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (err) {
        console.log(err)
    }
}
start()