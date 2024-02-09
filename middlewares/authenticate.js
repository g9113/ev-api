const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const createHttpError = require("http-errors");
const asyncErrorHandler = require("../utils/asyncErrorHandler");
const User = require("../models/User");

dotenv.config();

const authenticate = asyncErrorHandler(async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const userData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (userData) {
      const user = await User.findById(userData._id);
      if (user) {
        req.userId = userData._id;
        return next();
      }
      return next(createHttpError(401, "Only admins are allowed"));
    } else {
      return next(createHttpError(401, "Invalid token"));
    }
  } else {
    return next(createHttpError(404, "Token not found"));
  }
});

module.exports = authenticate;
