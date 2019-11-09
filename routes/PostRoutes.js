let express = require("express");
let router = express.Router();
let Postcontroller = require("../controllers/PostController.js");

router.get("/posts", Postcontroller.all);
router.post("/posts/findOne", Postcontroller.single);
router.post("/posts", Postcontroller.create);
router.post("/posts/update", Postcontroller.update);
router.delete("/posts", Postcontroller.delete);

module.exports = router;