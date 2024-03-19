const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const songsCtrl = require('../controllers/songs');
	
// GET /songs
router.get('/', songsCtrl.index);
// GET /songs/new
router.get('/new', songsCtrl.new);
// GET /songs/:id (show functionality) MUST be below new route
router.get('/:id', songsCtrl.show);
// POST /songs
router.post('/', songsCtrl.create);
//POST /playlists/:id/songs ---- this would go in movies to be post in playlists
// router.post('/playlists/:id/songs', songsCtrl.addToPlaylist)
	
module.exports = router;
