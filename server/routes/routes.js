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
  getFilteredProducts,
} = require("../queries/queries");

const { requestTime, validateToken } = require("../middleware/middleware");

router.use(express.json());

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
    res.send("Usuario creado con éxito");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/login", requestTime, async (req, res) => {
  try {
    const { email, password } = req.body;
    await verifyCredentials(email, password);
    const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
    res.send(token);
    console.log(token)
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

router.get("/tienda/filters", requestTime, async (req, res) => {
  const filters = req.body;
  const products = await getFilteredProducts(queryString);
  res.send(products);
});

module.exports = router;
