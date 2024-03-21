const Song = require('../models/song');
const Playlist = require('../models/playlist')

module.exports = {
  index,
  show,
  new: newSong,
  create,
  edit,
  update,
};

async function index(req, res) {
  const songs = await Song.find({});
  res.render('songs/index', { title: 'All Songs', songs });
}

async function show(req, res) {
  const song = await Song.findById(req.params.id)
  res.render('songs/show', { title: 'Song Details', song });
}

function newSong(req, res) {
  res.render('songs/new', { title: 'Add Song', errorMsg: '' });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const song = await Song.create(req.body);
    res.redirect(`/songs/${song._id}`);
  } catch (err) {
    console.log(err);
    res.render('songs/new', { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const song = await Song.findById(req.params.id)
  res.render('songs/edit', { title: 'Edit Song', song, errorMsg: '' })
}

async function update(req, res) {
  if (req.body.featured === '') {
    req.body.featured = '---'
  }
  const song = await Song.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/songs')
}
