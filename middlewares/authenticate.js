const dotenv = require("dotenv");
const createHttpError = require("http-errors");
const asyncErrorHandler = require("../utils/asyncErrorHandler");


dotenv.config();

const authenticate = asyncErrorHandler(async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const servertoken = process.env.SERVERTOKEN;
      if (!servertoken) throw new Error("Server token not found");
      if (token !== servertoken) throw new Error("Invalid token");
      if (servertoken === token) return next();
    } catch (e) {
      return next(createHttpError(401,  "Token not found"));
    }
  } else {
    return next(createHttpError(404, "Token not found"));
  }
});

module.exports = authenticate;
