const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true
});

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  featured: { type: String, default: '---' },
  album: { type: String },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Song', songSchema);