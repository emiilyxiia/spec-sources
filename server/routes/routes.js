const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/hello").get(controllers.hello);
router.route("/sources").get(controllers.sources);
router.route("/delete_source/:id").get(controllers.delete_source);


module.exports = router;