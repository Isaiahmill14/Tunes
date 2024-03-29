const mongoose = require('mongoose');
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

module.exports = mongoose.model('Song', songSchema);