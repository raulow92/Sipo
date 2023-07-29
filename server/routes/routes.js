const express = require("express");
const router = express.Router();
require("dotenv").config();

const {
  getProducts,
  getFilteredProducts,
  requestTime,
} = require("../queries");

router.use(express.json());

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
