const { Schema, model } = require('mongoose');

const memeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxlength: 30,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: 100,
    },
    imageUrl: {
      type: String,
      required: [true, 'Image is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'User ID is required'],
    },
  },
  { timestamps: true }
);

const Memes = model('product', memeSchema);

module.exports = Memes;
