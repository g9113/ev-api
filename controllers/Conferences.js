const asyncErrorHandler = require("../utils/asyncErrorHandler");
const Conference = require("../models/Conferences");

const createConference = async (req, res, next) => {
  const {
    name,
    description,
    startDate,
    endDate,
    location,
    organizer,
    website,
    registrationLink,
    topics,
    speakers,
    sponsors,
    contactEmail,
    createdBy,
    maxAttendees,
    fee,
    schedule,
    additionalInfo,
  } = req.body;

  try {
    const conferenceExist = await Conference.findOne({ name });

    if (conferenceExist) {
      return res
        .status(400)
        .json({ status: "error", message: "Conference already exists" });
    }

    const newConference = new Conference({
      name,
      description,
      startDate,
      endDate,
      location,
      organizer,
      website,
      registrationLink,
      topics,
      speakers,
      sponsors,
      contactEmail,
      createdBy,
      maxAttendees,
      fee,
      schedule,
      additionalInfo,
    });

    const result = await newConference.save();
    return res.status(201).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const getAllConferences = async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Conference.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const events = await query.exec();
  res.json(events);
};

const deleteConference = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedConference = await Conference.findByIdAndDelete(id);
    if (!deletedConference) {
      return res
        .status(404)
        .json({ status: "error", message: "Conference not found" });
    }
    res.json({ status: "success", message: "Conference deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createConference,
  getAllConferences,
  deleteConference,
};
