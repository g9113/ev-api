const { Schema, model } = require("mongoose");

const ConferenceSchema = new Schema({
  name: {
    type: String,
    required: [true, "Conference name is required"],
  },
  imglink:{
    type: String,
    required: [true, "Image link is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  organizer: {
    type: String,
    required: [true, "Organizer is required"],
  },
  website: {
    type: String,
    required: [true, "Website is required"],
  },
  registrationLink: {
    type: String,
    required: [true, "Registration link is required"],
  },
  topics: {
    type: [String],
    default: [],
  },
  speakers: {
    type: [String],
    default: [],
  },
  sponsors: {
    type: [String],
    default: [],
  },
  contactEmail: {
    type: String,
    required: [true, "Contact email is required"],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Created by user ID is required"],
  },
  maxAttendees: {
    type: Number,
    required: [true, "Max attendees is required"],
  },
  fee: {
    type: Number,
    required: [true, "Registration fee is required"],
  },
  schedule: {
    type: String,
    required: [true, "Event schedule is required"],
  },
  additionalInfo: {
    type: String,
  },
}, { timestamps: true });

const Conference = model("Conference", ConferenceSchema);

module.exports = Conference;
