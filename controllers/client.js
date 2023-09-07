const asyncErrorHandler = require('../utils/asyncErrorHandler');
const User = require('../models/User');
const Bootcamp = require('../models/Bootcamp');
const createHttpError = require('http-errors');
const Product = require('../models/Meme');
const Internship = require('../models/Interships');
const Courese = require('../models/Courese');

// Bootcamp Creation
const BootcampCreation = asyncErrorHandler(async (req, res, next) => {
  const { userId, licenseId, name, description, link, imageUrl } = req.body;
  const merchantExist = await Bootcamp.findOne({ userId });

  if (!merchantExist) {
    if (userId) {
      const merchant = new Bootcamp({
        userId,
        licenseId,
        name,
        description,
        link,
        imageUrl,
      });

      try {
        const result = await merchant.save();
        const resObj = result.toObject();
        return res.status(201).json({ status: "success", ...resObj });
      } catch (error) {
        return next(error);
      }
    }
  } else {
    return res
      .status(200)
      .json({ status: "success", message: "Already added" });
  }
  next(createHttpError(401, "Request not allowed"));
});

// Get Bootcamps
const getBootcamps = asyncErrorHandler(async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Bootcamp.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const products = await query.exec();
  res.json(products);
});

// Get Internships
const getInterships = asyncErrorHandler(async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Internship.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const products = await query.exec();
  res.json(products);
});

// Create Internship
const createInternship = asyncErrorHandler(async (req, res, next) => {
  const {
    userId,
    companyName,
    duration,
    link,
    description,
    skillsRequired,
    stipend,
    numberOfOpenings,
    title,
    location,
    whoCanApply,
    perks,
  } = req.body;

  try {
    const internshipExist = await Internship.findOne({ link });

    if (!internshipExist) {
      if (userId) {
        const internship = new Internship({
          userId,
          companyName,
          duration,
          link,
          description,
          skillsRequired,
          stipend,
          numberOfOpenings,
          title,
          location,
          whoCanApply,
          perks,
        });

        const result = await internship.save();
        const resObj = result.toObject();
        return res.status(201).json({ status: "success", ...resObj });
      }
    } else {
      return res
        .status(200)
        .json({ status: "success", message: "Already added" });
    }

    return next(createHttpError(401, "Request not allowed"));
  } catch (error) {
    return next(error);
  }
});

// Create Course
const CreateCourese = asyncErrorHandler(async (req, res, next) => {
  const { Name, description, link, whatyouwilllearn } = req.body;

  try {
    const CoureseExist = await Courese.findOne({ Name });

    if (!CoureseExist) {
      const newCourese = new Courese({
        Name,
        description,
        link,
        whatyouwilllearn,
      });

      const result = await newCourese.save();
      const resObj = result.toObject();
      return res.status(201).json({ status: "success", ...resObj });
    } else {
      return res
        .status(200)
        .json({ status: "success", message: "Already added" });
    }
  } catch (error) {
    return next(error);
  }
});

// Get Courses
const getCoureses = asyncErrorHandler(async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Courese.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const products = await query.exec();
  res.json(products);
});

// Search Products
const search = asyncErrorHandler(async (req, res, next) => {
  const { searchTerm } = req.params;
  const results = await Product.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
    ],
  }).exec();
  res.json(results);
});

// Delete Internship
const deleteintern = asyncErrorHandler(async (req, res, next) => {
  const { link } = req.body;
  if (link) {
    const product = Internship.findOneAndDelete({
      link: link,
    });
    const deletedProduct = await product.exec();
    if (deletedProduct) {
      res.json({ status: "success", message: "Product deleted" });
    } else {
      next(createHttpError(404, "Product not found"));
    }
  }
});

// Delete Courses
const deleteCourses = asyncErrorHandler(async (req, res, next) => {
  const { Name } = req.body;
  if (Name) {
    const product = Courese.findOneAndDelete({
      Name: Name,
    });
    const deletedProduct = await product.exec();
    if (deletedProduct) {
      res.json({ status: "success", message: "Product deleted" });
    } else {
      next(createHttpError(404, "Product not found"));
    }
  }
});

module.exports = {
  BootcampCreation,
  getBootcamps,
  getInterships,
  createInternship,
  CreateCourese,
  getCoureses,
  search,
  deleteintern,
  deleteCourses,
};
