const asyncErrorHandler = require('../utils/asyncErrorHandler');
const Memes = require('../models/Meme');
const createHttpError = require('http-errors');
const { IRequest } = require('../middlewares/authenticateMerchant');

// Add Memes
const addMemes = asyncErrorHandler(async (req, res, next) => {
  const { userId, name, description, imageUrl } = req.body;
  if (userId) {
    const meme = new Memes({
      name,
      description,
      imageUrl,
      userId,
    });
    const result = await meme.save();
    return res.json(result);
  }
  next(createHttpError(401, "Request not allowed"));
});

// Delete Memes
const deleteProduct = asyncErrorHandler(async (req, res, next) => {
  const { name, userId } = req.body;
  if (userId) {
    const meme = Memes.findOneAndDelete({
      name: name,
      userId: userId,
    });
    const deletedMeme = await meme.exec();
    if (deletedMeme) {
      res.json({ status: "success", message: "Meme deleted" });
    } else {
      next(createHttpError(404, "Meme not found"));
    }
  }
});

// Get Memes
const getProducts = asyncErrorHandler(async (req, res, next) => {
  const { pageNumber, limit } = req.params;
  const query = Memes.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const memes = await query.exec();
  res.json(memes);
});

module.exports = {
  addMemes,
  deleteProduct,
  getProducts,
};
