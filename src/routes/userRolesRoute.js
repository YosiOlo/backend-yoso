const router = require("express").Router();

const userController = require("../controllers/userController");

/* GET METHOD */
router.get('/', userController.getAllUser);
router.get('/user-roles', userController.getAllUserRoles);
router.get('/register-verify/:token', userController.verifyAccount)

/* POST METHOD */
router.post('/register', userController.register);

/* PUT METHOD */

module.exports = router;