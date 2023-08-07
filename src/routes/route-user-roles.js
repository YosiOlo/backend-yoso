const router = require("express").Router();

const userRoles = require("../controllers/user-roles");

router.get('/user-roles', userRoles.getAllData);

module.exports = router;