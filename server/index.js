const express = require("express");
require("dotenv").config();
const routes = require("./routes/routes");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/", routes);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, console.log(`Servidor arriba en el puerto ${PORT}`));
}

module.exports = app

