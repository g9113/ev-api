const asyncErrorHandler = require("../utils/asyncErrorHandler");
const Event = require("../models/Event");

const createEvent = async (req, res, next) => {
  const { name, description,imglink, link, date, location, organizer } = req.body;

  try {
    const eventExist = await Event.findOne({ name });

    if (!eventExist) {
      const newEvent = new Event({
        imglink,
        name,
        description,
        link,
        date,
        location,
        organizer,
      });

      const result = await newEvent.save();
      const resObj = result.toObject();
      return res.status(201).json({ status: "success", ...resObj });
    } else {
      return res
        .status(200)
        .json({ status: "success", message: "Event already added" });
    }
  } catch (error) {
    return next(error);
  }
};

const getEvents = async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Event.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const events = await query.exec();
  res.json(events);
};



const getEventslastest = async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Event.find()
    .sort({ createdAt: -1 })
    .limit(1);
  const events = await query.exec();
  res.json(events);
};


const deleteEvent = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ status: "error", message: "Event not found" });
    }
    res.json({ status: "success", message: "Event deleted successfully" });
  } catch (error) {
    return next(error);
  }
};


const getEventsbyid = async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res
        .status(404)
        .json({ status: "error", message: "Bootcamp not found" });
    }
    res.json(event);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEvent,
  getEvents,
  deleteEvent,
  getEventslastest,
  getEventsbyid
};
