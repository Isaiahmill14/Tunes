const Song = require('../models/song');

module.exports = {
  create
};

async function create(req, res) {
  const song = await Song.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  song.reviews.push(req.body);
  try {
    // Save any changes made to the song doc
    await song.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/songs/${song._id}`);
}