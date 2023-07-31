const bcrypt = require("bcryptjs");
const pool = require("../config");
require("dotenv").config();

const getUser = async (email) => {
  const values = [email];
  const consulta = "SELECT * FROM users WHERE email = $1";
  const { rows: rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "Usuario no encontrado" };
  return rowCount[0];
};

const verifyCredentials = async (email, password) => {
  const values = [email];
  const consulta = "SELECT * FROM users WHERE email = $1";
  const {
    rows: [usuario],
    rowCount,
  } = await pool.query(consulta, values);
  const { password: passwordEncriptada } = usuario;
  const passwordCorrecta = bcrypt.compareSync(password, passwordEncriptada);
  if (!passwordCorrecta || !rowCount)
    throw { code: 401, message: "Email o contraseña incorrecta" };
};

const userRegister = async (user) => {
  let { nombre, apellidos, email, password } = user;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [nombre, apellidos, email, passwordEncriptada];
  const consulta = "INSERT INTO users (nombre, apellidos, email, password, image) values ($1, $2, $3, $4, NULL)";
  await pool.query(consulta, values);
};

const updatePassword = async (user) => {
  let { user_id, password } = user;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [ passwordEncriptada, user_id];
  const consulta = "UPDATE users SET password = $1 WHERE user_id = $2";
  await pool.query(consulta, values);
};

const updateUser = async (user) => {
  let { user_id, nombre, apellidos, email, password, image } = user;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [ nombre, apellidos, email, passwordEncriptada, user_id];
  const consulta = "UPDATE users SET nombre = $1, apellidos = $2, email = $3, password = $4, image = $5 WHERE user_id = $5";
  await pool.query(consulta, values);
};

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

module.exports = {
  getUser,
  verifyCredentials,
  userRegister,
  updatePassword,
  updateUser,
  getProducts,
  getFilteredProducts
};
