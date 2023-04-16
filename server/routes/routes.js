const controllers = require('../controllers/controller.js');
const router = require('express').Router();

//router.route("/hello").get(controllers.hello);
router.route("/test").get(controllers.testing);
router.route("/sources").get(controllers.sources);
router.route("/delete_source/:id").post(controllers.delete_source);
router.route("/add_source").post(controllers.add_source);
//router.route("/get_source/:id").get(controllers.getSource);

module.exports = router;