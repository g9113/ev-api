const { Schema, model } = require("mongoose");

const CouresSchema = new Schema({
  Name: {
    type: String,
    required: [true, "Company name is required"],
  },
  link: {
    type: [String],
    required: [true, "Link is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  whatyouwilllearn: {
    type: [String],
    required: [true, "Perks is required"],
  },
});

const Courese = model("Courese", CouresSchema);

module.exports = Courese;
