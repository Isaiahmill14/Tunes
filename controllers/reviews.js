const Song = require('../models/song');

module.exports = {
  create
};

async function create(req, res) {
  const song = await Song.findById(req.params.id);
  song.reviews.push(req.body);
  try {
    await song.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/songs/${song._id}`);
}