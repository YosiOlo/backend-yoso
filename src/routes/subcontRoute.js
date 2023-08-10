const router = require("express").Router();

const controller = require("../controllers/subcontController");

const middleware = require("../middleware");

router.get('/', controller.getDataSubcont);

router.post('/', middleware.createSubcontChecker, controller.create);

router.put('/:id', middleware.createSubcontChecker, controller.update);

router.delete('/:id', controller.delete);

module.exports = router;