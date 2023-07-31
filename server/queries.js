const pool = require("./config");
require("dotenv").config();

const getProducts = async () => {
  const consulta = "SELECT * FROM products";
  const { rows: rowCount } = await pool.query(consulta);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount;
};

const getFilteredProducts = async ({
  categoria,
  region,
}) => {
  try {
    let filter = [];
    const values = [];

    const addFilter = (campo, comparador, valor) => {
      values.push(valor);
      const { length } = filter;
      filter.push(`${campo} ${comparador} $${length + 1}`);
    };
    if (categoria) addFilter("categoria", "=", categoria);
    if (region) addFilter("region", "=", region);

    let query = "SELECT * FROM products";

    if (filter.length > 0) {
      filter = filter.join(" AND ");
      query += ` WHERE ${filter}`;
    }
    console.log(query)
    const { rows: products } = await pool.query(query, values);
    if (!products) throw { code: 404, message: "Productos no encontrados" };
    return products;
  } catch (e) {
    console.log(e);
  }
};

const requestTime = (req, res, next) => {
  console.log("\x1b[31m", Date().toString());
  console.log("Se ha realizado una consulta a la siguiente direccion:");
  console.log("%s\x1b[0m", req.originalUrl);
  next();
};

module.exports = {
  getProducts,
  getFilteredProducts,
  requestTime,
};
