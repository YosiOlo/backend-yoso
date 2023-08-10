const router = require("express").Router();

const controller = require("../controllers/suplierController");

const middleware = require("../middleware");

router.get('/', controller.getDataSuplier);

router.post('/', middleware.createSuplierChecker, controller.create);

router.put('/:id', middleware.createSuplierChecker, controller.update);

router.delete('/:id', controller.delete);

module.exports = router;