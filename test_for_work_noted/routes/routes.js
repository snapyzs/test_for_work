const Router = require("express");
const authCheck = require("../middleware/authCheck");
const router = new Router();
const noteRouter = require("./noteRoutes");

router.use("/note",authCheck,noteRouter);

module.exports = router;