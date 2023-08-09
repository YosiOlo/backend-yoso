const mainRoutes = require("express").Router();

const userRoutes = require("./userRoute");

mainRoutes.use("/api/user", userRoutes);

module.exports = mainRoutes;