const Router = require("express");
const router = new Router();
const NoteController = require("../controllers/noteController");

router.get("/all",NoteController.getAll)
router.post("/create",NoteController.create);
router.post("/update",NoteController.update);
router.post("/delete",NoteController.delete);


module.exports = router;