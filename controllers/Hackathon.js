const asyncErrorHandler = require("../utils/asyncErrorHandler");
const Hackathon = require("../models/Hackathon");

const createHackathon = async (req, res, next) => {
  const {
    name,
    description,
    startDate,
    endDate,
    location,
    organizer,
    website,
    registrationLink,
    tags,
    sponsors,
    prizes,
    contactEmail,
    teamSize,
    eligibility,
    rules,
    judgingCriteria,
    schedule,
    additionalInfo,
  } = req.body;

  try {
    const hackathonExist = await Hackathon.findOne({ name });

    if (hackathonExist) {
      return res
        .status(400)
        .json({ status: "error", message: "Hackathon already exists" });
    }

    const newHackathon = new Hackathon({
      name,
      description,
      startDate,
      endDate,
      location,
      organizer,
      website,
      registrationLink,
      tags,
      sponsors,
      prizes,
      contactEmail,
      teamSize,
      eligibility,
      rules,
      judgingCriteria,
      schedule,
      additionalInfo,
    });

    const result = await newHackathon.save();
    return res.status(201).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const getAllHackathons = async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Hackathon.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const events = await query.exec();
  res.json(events);
};

const getAllHackathonslastest = async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Hackathon.find().sort({ createdAt: -1 }).limit(1);
  const events = await query.exec();
  res.json(events);
};

const deleteHackathon = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedHackathon = await Hackathon.findByIdAndDelete(id);
    if (!deletedHackathon) {
      return res
        .status(404)
        .json({ status: "error", message: "Hackathon not found" });
    }
    res.json({ status: "success", message: "Hackathon deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getHackathonbyid = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hackathon = await Hackathon.findById(id);
    if (!hackathon) {
      return res
        .status(404)
        .json({ status: "error", message: "Bootcamp not found" });
    }
    res.json(hackathon);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHackathon,
  getAllHackathons,
  deleteHackathon,
  getAllHackathonslastest,
  getHackathonbyid,
};
