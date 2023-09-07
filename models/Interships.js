const { Schema, model } = require('mongoose');

const internshipSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
  },
  link: {
    type: String,
    required: [true, 'Link is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  skillsRequired: {
    type: [String],
    required: [true, 'Skills required is required'],
  },
  stipend: {
    type: Number,
    required: [true, 'Stipend is required'],
  },
  numberOfOpenings: {
    type: Number,
    required: [true, 'Number of openings is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  whoCanApply: {
    type: String,
    required: [true, 'Who can apply is required'],
  },
  perks: {
    type: [String],
    required: [true, 'Perks is required'],
  },
});

const Internship = model('internship', internshipSchema);

module.exports = Internship;
