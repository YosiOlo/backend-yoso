const mainRoutes = require("express").Router();

const userRolesRoutes = require("./userRolesRoute");

mainRoutes.use("/api/user", userRolesRoutes);

module.exports = mainRoutes;