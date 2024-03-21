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
// GET /songs/edit
router.get('/:id/edit', songsCtrl.edit)
// PUT /songs/update
router.put('/:id/update', songsCtrl.update)
	
module.exports = router;
