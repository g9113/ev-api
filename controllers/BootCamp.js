const Bootcamp = require("../models/Bootcamp");

const bootcampCreation = async (req, res, next) => {
  const {
    name,
    description,
    website,
    imageUrl,
    location,
    startDate,
    endDate,
    duration,
    organizer,
    category,
    teamsize,
    tags,
    contactEmail,
  } = req.body;
  try {
    const bootcampExist = await Bootcamp.findOne({ name });
    if (bootcampExist) {
      return res
        .status(400)
        .json({ status: "error", message: "Bootcamp already exists" });
    }
    const bootcamp = new Bootcamp({
      name,
      description,
      website,
      imageUrl,
      location,
      startDate,
      endDate,
      duration,
      organizer,
      category,
      teamsize,
      tags,
      contactEmail,
    });
    const result = await bootcamp.save();
    return res.status(201).json({ status: "success", data: result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getBootcamps = async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  try {
    const query = Bootcamp.find()
      .sort({ createdAt: -1 })
      .skip((Number(pageNumber) - 1) * Number(limit))
      .limit(Number(limit));
    const bootcamps = await query.exec();
    res.json(bootcamps);
  } catch (error) {
    next(error);
  }
};



const getBootcampslastest = async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  try {
    const query = Bootcamp.find()
      .sort({ createdAt: -1 })
      .limit(1);
    const bootcamps = await query.exec();
    res.json(bootcamps);
  } catch (error) {
    next(error);
  }
};

const getBootcampsbyid = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bootcamp = await Bootcamp.findById(id);
    if (!bootcamp) {
      return res
        .status(404)
        .json({ status: "error", message: "Bootcamp not found" });
    }
    res.json(bootcamp);
  } catch (error) {
    next(error);
  }
};

const deleteBootcamp = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedBootcamp = await Bootcamp.findByIdAndDelete(id);
    if (!deletedBootcamp) {
      return res
        .status(404)
        .json({ status: "error", message: "Bootcamp not found" });
    }
    res.json({ status: "success", message: "Bootcamp deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const search = async (req, res, next) => {
  const { searchTerm } = req.params;
  try {
    const results = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    }).exec();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  bootcampCreation,
  getBootcamps,
  deleteBootcamp,
  getBootcampsbyid,
  search,
  getBootcampslastest,
};
