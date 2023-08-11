const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (req, res, next) => {
  const auth = req.header("Authorization");
  const token = auth.split("Bearer ")[1];
  const verificacion = jwt.verify(token, process.env.TOKEN_SECRET);
  if (!verificacion) throw { code: 401, message: "Token inválido" };
  next();
}

const requestTime = (req, res, next) => {
  console.log("\x1b[31m", Date().toString());
  console.log("Se ha realizado una consulta a la siguiente direccion:");
  console.log("%s\x1b[0m", req.originalUrl);
  next();
};

module.exports = {
  validateToken,
  requestTime,
};
