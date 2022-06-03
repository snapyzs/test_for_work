const Router = require("express");
const router = new Router();
const sendMessage = require("../controller/sendController")

router.post("/send_message",sendMessage);

module.exports = router;