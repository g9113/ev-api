const createHttpError = require('http-errors');

const asyncErrorHandler = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      console.error(error);
      let statusCode = error.status || 500; 
      let message = error.message || 'Server Error'; 
      next(createHttpError(statusCode, message));
    }
  };
};

module.exports = asyncErrorHandler;
