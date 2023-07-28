const express = require("express");
const router = express.Router();
require("dotenv").config();

const {
  getProductos,
  requestTime,
} = require("../queries");

router.use(express.json());

router.get("/tienda", requestTime, async (req, res) => {
  try {
    const data = await getProductos();
    res.send(data);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

module.exports = router;
