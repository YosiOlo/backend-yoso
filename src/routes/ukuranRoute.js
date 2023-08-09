const router = require("express").Router();

const ukuranController = require("../controllers/ukuranController");

router.get('/', ukuranController.getUkuran);

router.post('/', ukuranController.createUkuran);

router.put('/:id', ukuranController.updateUkuran);

router.delete('/:id', ukuranController.deleteUkuran);

module.exports = router;