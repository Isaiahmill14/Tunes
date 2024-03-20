const Song = require('../models/song');
const Playlist = require('../models/playlist')

module.exports = {
  index,
  show,
  new: newSong,
  create
};

async function index(req, res) {
  const songs = await Song.find({});
  res.render('songs/index', { title: 'All Songs', songs });
}

async function show(req, res) {
  const song = await Song.findById(req.params.id)
  res.render('songs/show', { title: 'Song Detail', song });
}

function newSong(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('songs/new', { title: 'Add Song', errorMsg: '' });
}

async function create(req, res) {
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const song = await Song.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the songs index after we implement it
    res.redirect(`/songs/${song._id}`);  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('songs/new', { errorMsg: err.message });
  }
}