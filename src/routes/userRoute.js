const router = require("express").Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const middleware = require("../middleware");

/* GET METHOD */
router.get('/', userController.getAllUser);
router.get('/user-roles', userController.getAllUserRoles);
router.get('/register-verify/:token', userController.verifyAccount);
router.get('/current', middleware.whoIsLogin, authController.currentUser);

/* POST METHOD */
router.post('/user-roles', middleware.createRoleChecker, userController.createRole);
router.post('/register', middleware.registerChecker, authController.register);
router.post('/login', middleware.loginChecker, authController.login);
router.post('/check-password', middleware.whoIsLogin, userController.checkPassword);
router.post('/reset-password', middleware.whoIsLogin, userController.resetPassword);

/* PUT METHOD */
router.put('/update', middleware.whoIsLogin, middleware.updateUserChecker, userController.updateUser);
router.put('/user-roles/:id', middleware.createRoleChecker, userController.updateRole);

/* DELETE METHOD */
router.delete('/user-roles/:id', userController.deleteRole);
router.delete('/delete', middleware.whoIsLogin, userController.deleteUser);

module.exports = router;