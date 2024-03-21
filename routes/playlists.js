const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../controllers/playlists');

// GET /playlists
router.get('/', playlistsCtrl.index)
// GET /playlists/new 
router.get('/new', playlistsCtrl.new);
// GET /playlists/:id 
router.get('/:id', playlistsCtrl.show)
// POST /playlists 
router.post('/', playlistsCtrl.create);
// POST /playlists/:id/songs
router.post('/:id/songs', playlistsCtrl.addToPlaylist)
// DELETE /playlists/:id/songs/:id
router.delete('/:playlistId/songs/:songId', playlistsCtrl.delete)

module.exports = router;