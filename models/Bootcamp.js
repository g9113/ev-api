const { Schema, model } = require('mongoose');

const bootcampSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    licenseId: {
      type: String,
      required: [true, 'License Id is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    link: {
      type: String,
      required: [true, 'Link is required'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
  },
  { timestamps: true }
);

const Bootcamp = model('bootcamp', bootcampSchema);

module.exports = Bootcamp;
