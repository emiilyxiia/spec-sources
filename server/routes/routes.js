const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/hello").get(controllers.hello);
router.route("/sources").get(controllers.sources);
router.route("/delete_source/:id").get(controllers.delete_source);
router.route("/add_source").get(controllers.addSource);
router.route("/get_source/:id").get(controllers.getSource);


module.exports = router;