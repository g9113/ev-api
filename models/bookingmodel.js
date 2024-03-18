const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  stationName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    required: true,
    trim: true,
  },
});

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;
