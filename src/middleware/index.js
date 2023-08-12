const {
    createRoleChecker, 
    loginChecker, 
    registerChecker, 
    updateUserChecker, 
    whoIsLogin, 
    createUserByAdminChecker,
} = require("./userMiddleware");

const {
    createCompanyChecker,
    createCustomerChecker,
    createSubcontChecker,
    createSuplierChecker
} = require("./customMiddleware");

module.exports = {
    loginChecker,
    registerChecker,
    updateUserChecker,
    whoIsLogin,
    createRoleChecker,
    createUserByAdminChecker,
    createCompanyChecker,
    createCustomerChecker,
    createSubcontChecker,
    createSuplierChecker
}