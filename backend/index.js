const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

try {
  mongoose.connect("mongodb://root:root@database/miapp?authSource=admin");
} catch (error) {
  console.log(error);
}

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo por el puerto ${process.env.PORT}`)
);
