const mainRoutes = require("express").Router();

const userRoutes = require("./userRoute");

const ukuranRoutes = require("./ukuranRoute");

mainRoutes.use("/api/user", userRoutes);

mainRoutes.use("/api/ukuran", ukuranRoutes);

module.exports = mainRoutes;