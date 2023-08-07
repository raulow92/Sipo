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
    rows: [user],
    rowCount,
  } = await pool.query(consulta, values);
  console.log(user);
  if (!rowCount) throw { code: 401, message: "Email no encontrado" };
  const { password: passwordEncriptada } = user;
  const passwordCorrecta = bcrypt.compareSync(password, passwordEncriptada);
  if (!passwordCorrecta) throw { code: 401, message: "Contraseña incorrecta" };
};

const userRegister = async (user) => {
  let { nombre, apellidos, email, password } = user;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [nombre, apellidos, email, passwordEncriptada];
  const consulta =
    "INSERT INTO users (nombre, apellidos, email, password) values ($1, $2, $3, $4)";
  await pool.query(consulta, values);
};

const updatePassword = async (user) => {
  let { user_id, password } = user;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [passwordEncriptada, user_id];
  const consulta = "UPDATE users SET password = $1 WHERE user_id = $2";
  await pool.query(consulta, values);
};

const updateUser = async (userData) => {
  try {
    const { nombre, apellidos, pass, image, id } = userData;
    const passwordEncriptada = bcrypt.hashSync(pass);
    const query = `
      UPDATE users
      SET nombre = $1, apellidos = $2, password = $3, image = $4
      WHERE user_id = $5
    `;

    await pool.query(query, [nombre, apellidos, passwordEncriptada, image, id]);
  } catch (error) {
    console.log(error);
  }
}

const getProducts = async () => {
  const consulta = "SELECT * FROM products";
  const { rows: rowCount } = await pool.query(consulta);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount;
};

const getUserProducts = async (user_id) => {
  const values = [user_id];
  const consulta = "SELECT * from products WHERE user_id = $1";
  const { rows: rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount;
};

const deleteUserProduct = async (user, product) => {
  const values = [user, product];
  const consulta =
    "DELETE FROM products WHERE user_id = $1 AND product_id = $2";
  await pool.query(consulta, values);
};

const getFilteredProducts = async ({ categoria, region, buscador }) => {
  try {
    let filter = [];
    const values = [];

    const addFilter = (campo, comparador, valor) => {
      values.push(valor);
      const { length } = filter;
      filter.push(`${campo} ${comparador} $${length + 1}`);
    };
    if (buscador) {
      addFilter("LOWER(titulo)", "ILIKE", `%${buscador}%`);
      addFilter("LOWER(descripcion)", "ILIKE", `%${buscador}%`);
    }
    if (categoria) addFilter("categoria", "=", categoria);
    if (region) addFilter("region", "=", region);

    let subquery = "SELECT * FROM products";
    let querysearch = "SELECT * FROM";

    if (filter.length > 0) {
      if (buscador) {
        let filter1 = filter.slice(0, 2);
        let filter2 = filter.slice(2);
        console.log(filter2);
        if (filter2.length == 0) {
          filter1 = filter1.join(" OR ");
          subquery += ` WHERE ${filter1}`;
          query = subquery;
        } else {
          filter1 = filter1.join(" OR ");
          filter2 = filter2.join(" AND ");
          subquery += ` WHERE ${filter2}`;
          querysearch += `(${subquery}) as cat_reg WHERE ${filter1}`;
          query = querysearch;
        }
      } else {
        filter = filter.join(" AND ");
        subquery += ` WHERE ${filter}`;
        query = subquery;
      }
    }
    const { rows: products } = await pool.query(query, values);
    if (!products) throw { code: 404, message: "Productos no encontrados" };
    return products;
  } catch (e) {
    console.log(e);
  }
};

const addFavorite = async (user_id, product_id) => {
  const values = [user_id, product_id];
  const consulta =
    "INSERT INTO favorites (user_id, product_id) values ($1, $2)";
  await pool.query(consulta, values);
};

const getUserFavorites = async (user_id) => {
  const values = [user_id];
  const consulta = "SELECT * from favorites WHERE user_id = $1";
  const { rows: rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount;
};

const getFavorite = async (user_id, product_id) => {
  const values = [user_id, product_id];
  const consulta =
    "SELECT * from favorites WHERE user_id = $1 AND product_id = $2";
  const { rows: rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount[0];
};

const getUserFavoritesDetail = async (user_id) => {
  const values = [user_id];
  const consulta =
    "SELECT p.* FROM products p JOIN favorites f ON p.product_id = f.product_id WHERE f.user_id = $1";
  const { rows: rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount;
};

const deleteUserFavorite = async (user, product) => {
  const values = [user, product];
  const consulta =
    "DELETE FROM favorites WHERE user_id = $1 AND product_id = $2";
  await pool.query(consulta, values);
};

const getUserProaducts = async (user_id) => {
  const values = [user_id];
  const consulta = "SELECT * from products WHERE user_id = $1";
  const { rows: rowCount } = await pool.query(consulta, values);
  if (!rowCount) throw { code: 404, message: "Productos no encontrados" };
  return rowCount;
};

module.exports = {
  getUser,
  verifyCredentials,
  userRegister,
  updatePassword,
  updateUser,
  getProducts,
  getUserProducts,
  deleteUserProduct,
  getFilteredProducts,
  addFavorite,
  getUserFavorites,
  getFavorite,
  getUserFavoritesDetail,
  deleteUserFavorite,
};
