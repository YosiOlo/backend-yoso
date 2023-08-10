const mainRoutes = require("express").Router();

const userRoutes = require("./userRoute");

const ukuranRoutes = require("./ukuranRoute");

const customerRoutes = require("./customerRoute");

const divisiRoutes = require("./divisiRoute");

const subcontRoutes = require("./subcontRoute");

const suplierRoutes = require("./suplierRoute");

mainRoutes.use("/api/user", userRoutes);

mainRoutes.use("/api/ukuran", ukuranRoutes);

mainRoutes.use("/api/customer", customerRoutes);

mainRoutes.use("/api/divisi", divisiRoutes);

mainRoutes.use("/api/subcont", subcontRoutes);

mainRoutes.use("/api/suplier", suplierRoutes);

module.exports = mainRoutes;