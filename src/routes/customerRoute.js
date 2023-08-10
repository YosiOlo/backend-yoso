const router = require("express").Router();

const controller = require("../controllers/customerController");

const middleware = require("../middleware");

router.get('/', controller.getDataCustomer);

router.post('/', middleware.createCustomerChecker, controller.create);

router.put('/:id', middleware.createCustomerChecker, controller.update);

router.delete('/:id', controller.delete);

module.exports = router;