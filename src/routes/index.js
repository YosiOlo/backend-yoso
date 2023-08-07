const mainRoutes = require("express").Router();

const userRolesRoutes = require("./route-user-roles");

mainRoutes.use("/api/user", userRolesRoutes);

module.exports = mainRoutes;