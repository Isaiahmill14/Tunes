const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../controllers/playlists');

// This router is mounted to a "starts with" path of '/'

// GET /playlists
router.get('/playlists', playlistsCtrl.index)
// GET /playlists/new (new functionality)
router.get('/playlists/new', playlistsCtrl.new);
// GET /playlists/:id (show functionality) MUST be below new route
router.get('/:id', playlistsCtrl.show)
// POST /playlists (create functionality)
router.post('/playlists', playlistsCtrl.create);


module.exports = router;