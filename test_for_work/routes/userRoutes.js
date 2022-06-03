const Router = require("express");
const userControllers = require("../controllers/userControllers");
const router = new Router();
const authCheck = require("../middleware/authCheck");


router.post("/register",userControllers.register);
router.post("/login",userControllers.login);
router.post("/update",authCheck,userControllers.update);
router.post("/delete",authCheck,userControllers.delete);

module.exports = router;
