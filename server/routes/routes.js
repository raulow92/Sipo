const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("dotenv").config();

const {
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
  buyProduct,
  getPurchasedProducts,
  getSeller,
  getSelectedProduct,
  productSelled,
  sellProduct,
} = require("../queries/queries");

const { requestTime, validateToken } = require("../middleware/middleware");

router.use(express.json());

router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/users", requestTime, validateToken, async (req, res) => {
  try {
    const auth = req.header("Authorization");
    const token = auth.split("Bearer ")[1];
    const { email } = jwt.decode(token);
    const data = await getUser(email);
    res.send(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.post("/users", requestTime, async (req, res) => {
  try {
    const user = req.body;
    await userRegister(user);
    res.status(201).send("Usuario creado con éxito");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/login", requestTime, async (req, res) => {
  try {
    const { email, password } = req.body;
    await verifyCredentials(email, password);
    const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
    res.status(201).send(token);
    console.log(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error.message);
  }
});

router.patch("/users", requestTime, async (req, res) => {
  try {
    const user = req.body;
    await updatePassword(user);
    res.send("Password actualizada");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/tienda", requestTime, async (req, res) => {
  try {
    const data = await getProducts();
    res.send(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.get("/users/:user_id/ventas", requestTime, async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await getUserProducts(user_id);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.delete(
  "/users/:user_id/ventas/:product_id",
  requestTime,
  async (req, res) => {
    try {
      const { user_id, product_id } = req.params;
      const data = await deleteUserProduct(user_id, product_id);
      console.log(data);
      res.send("Producto eliminado con éxito");
    } catch (error) {
      res.status(error.code || 500).send(error.message);
    }
  }
);

router.get("/tienda/filters", requestTime, async (req, res) => {
  const filters = req.query;
  const products = await getFilteredProducts(filters);
  res.send(products);
});

router.get("/favorites/:user_id/:product_id", requestTime, async (req, res) => {
  try {
    const { user_id, product_id } = req.params;
    const favorites = await getFavorite(user_id, product_id);
    res.send(favorites);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.delete(
  "/favorites/:user_id/:product_id",
  requestTime,
  async (req, res) => {
    const { user_id, product_id } = req.params;
    await deleteUserFavorite(user_id, product_id);
    res.send("Producto eliminado de favoritos");
  }
);

router.post("/favorites", requestTime, async (req, res) => {
  const { user_id, product_id } = req.body;
  await addFavorite(user_id, product_id);
  res.send("Producto agregado a favoritos");
});

router.get("/favorites/:user_id", requestTime, async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await getUserFavoritesDetail(user_id);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.get("/user/:user_id/favorites", requestTime, async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await getUserFavorites(user_id);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.patch("/update/:userID", requestTime, async (req, res) => {
  try {
    const { userID } = req.params;
    console.log(userID);
    const userData = req.body;
    console.log(userData.id)
    if (userID != userData.id) {
      console.log("entro")
      return res.status(400).send({
        message: "El id del parámetro no coincide con el id usuario recibido",
      });
    }
    await updateUser(userData);
    res.send("Información de usuario actualizada con éxito");
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.post("/buy", requestTime, async (req, res) => {
  const { product_id, user_id } = req.body;
  await buyProduct(product_id, user_id);
  await productSelled(product_id);
  res.send("Producto comprado con éxito");
});

router.get("/buys/:user_id", requestTime, async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await getPurchasedProducts(user_id);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.get("/seller/:product_id", requestTime, async (req, res) => {
  try {
    const { product_id } = req.params;
    const data = await getSeller(product_id);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.get("/product/:product_id", requestTime, async (req, res) => {
  try {
    const { product_id } = req.params;
    const data = await getSelectedProduct(product_id);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

router.post("/sell", requestTime, async (req, res) => {
  const productData = req.body;
  await sellProduct(productData);
  res.send("Producto agregado con éxito");
});

module.exports = router;
