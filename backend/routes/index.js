const { Router } = require("express");

const controllers = require("../controllers/index");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/notes", controllers.getNotes);
router.post("/note", controllers.addNote);

module.exports = router;
