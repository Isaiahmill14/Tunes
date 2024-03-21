const express = require('express');
const router = express.Router();
const songsCtrl = require('../controllers/songs');
	
// GET /songs
router.get('/', songsCtrl.index);
// GET /songs/new
router.get('/new', songsCtrl.new);
// GET /songs/:id 
router.get('/:id', songsCtrl.show);
// POST /songs
router.post('/', songsCtrl.create);
// GET /songs/:id/edit
router.get('/:id/edit', songsCtrl.edit)
// PUT /songs/:id/update
router.put('/:id/update', songsCtrl.update)
	
module.exports = router;
