const router = require("express").Router();

const controller = require("../controllers/divisiController");

router.get('/', controller.getDataDivisi);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;