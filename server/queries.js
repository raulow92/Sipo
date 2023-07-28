const pool = require("./config");
require("dotenv").config();

const getProductos = async () => {
  const consulta = "SELECT * FROM products";
  const { rows: rowCount } = await pool.query(consulta);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount;
};

const requestTime = (req, res, next) => {
  console.log("\x1b[31m", Date().toString());
  console.log("Se ha realizado una consulta a la siguiente direccion:");
  console.log("%s\x1b[0m", req.originalUrl);
  next();
};

module.exports = {
  getProductos,
  requestTime,
};
