const asyncErrorHandler = require("../utils/asyncErrorHandler");
const Event = require("../models/Event");

const createEvent = asyncErrorHandler(async (req, res, next) => {
  const { name, description, link, date, location, organizer } = req.body;

  try {
    const eventExist = await Event.findOne({ name });

    if (!eventExist) {
      const newEvent = new Event({
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
});

const getEvents = asyncErrorHandler(async (req, res, next) => {
  const { pageNumber, limit } = req.query;
  const query = Event.find()
    .sort({ createdAt: -1 })
    .skip((Number(pageNumber) - 1) * Number(limit))
    .limit(Number(limit));
  const events = await query.exec();
  res.json(events);
});


const deleteEvent = asyncErrorHandler(async (req, res, next) => {
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
});

module.exports = {
  createEvent,
  getEvents,
  deleteEvent
};
