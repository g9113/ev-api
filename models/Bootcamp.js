const { Schema, model } = require("mongoose");

const bootcampSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    website: {
      type: String,
      required: [true, "Website URL is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    organizer: {
      type: String,
      required: [true, "Organizer is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    tags: {
      type: [String],
      default: [],
    },
    contactEmail: {
      type: String,
      required: [true, "Contact email is required"],
    },
  },
  { timestamps: true }
);

const Bootcamp = model("Bootcamp", bootcampSchema);

module.exports = Bootcamp;
