const router = require("express").Router();

const controller = require("../controllers/ukuranController");

router.get('/', controller.getUkuran);

router.post('/', controller.createUkuran);

router.put('/:id', controller.updateUkuran);

router.delete('/:id', controller.deleteUkuran);

module.exports = router;