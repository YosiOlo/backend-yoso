const express = require("express");

const cors = require("cors");

const appRoutes = require("./src/routes");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }))

app.use('/', appRoutes);

app.listen(8080, () => console.log("Listen on port http://localhost:8080"))