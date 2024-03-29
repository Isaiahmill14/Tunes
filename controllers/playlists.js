const Playlist = require('../models/playlist');
const Song = require('../models/song');

module.exports = {
  index,
  show,
  new: newPlaylist,
  create,
  addToPlaylist,
  delete: deleteSong,
};

async function index(res, res) {
  const playlists = await Playlist.find({})
  res.render('playlists/index', { title: 'All Playlists', playlists })
}

async function show(req, res) {
  const playlist = await Playlist.findById(req.params.id).populate('songs')
  const songs = await Song.find({ _id: { $nin: playlist.song} }).sort('title')
  res.render('playlists/show', { title: 'Playlist Details', playlist, songs })
}

async function addToPlaylist(req, res) {
  const playlist = await Playlist.findById(req.params.id)
  playlist.songs.push(req.body.songId)
  await playlist.save()
  res.redirect(`/playlists/${playlist._id}`)
}

async function newPlaylist(req, res) {
    //Sort playlists by their name
    const playlists = await Playlist.find({}).sort('name');
    res.render('playlists/new', { title: 'Add Playlist', errorMsg: '' });
  }

async function create(req, res) {
  try {
    await Playlist.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/playlists');
}

async function deleteSong(req, res) {
  const playlist = await Playlist.findById(req.params.playlistId)
  console.log(playlist)
  playlist.songs.remove(req.params.songId)
  await playlist.save()
  res.redirect(`/playlists/${playlist._id}`)
}
