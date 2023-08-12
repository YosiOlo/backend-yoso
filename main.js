const express = require("express");

const cors = require("cors");

const appRoutes = require("./src/routes");

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use('/', appRoutes);

app.listen(8080, () => console.log("Listen on port http://localhost:8080"))