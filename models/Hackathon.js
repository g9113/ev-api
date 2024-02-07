const { Schema, model } = require("mongoose");

const HackathonSchema = new Schema({
  name: {
    type: String,
    required: [true, "Hackathon name is required"],
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
  tags: {
    type: [String],
    default: [],
  },
  sponsors: {
    type: [String],
    default: [],
  },
  prizes: {
    type: String,
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
  teamSize: {
    type: Number,
    required: [true, "Team size is required"],
  },
  eligibility: {
    type: String,
    required: [true, "Eligibility details are required"],
  },
  rules: {
    type: String,
    required: [true, "Rules are required"],
  },
  judgingCriteria: {
    type: String,
    required: [true, "Judging criteria is required"],
  },
  schedule: {
    type: String,
    required: [true, "Event schedule is required"],
  },
  additionalInfo: {
    type: String,
  },
}, { timestamps: true });

const Hackathon = model("Hackathon", HackathonSchema);

module.exports = Hackathon;
