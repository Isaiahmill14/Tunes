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
// GET /songs/update
// router.get('/edit', function(req, res, next) {
//     const item = {
//         title: req.body.title,
//         artist: req.body.artist,
//         ft: req.body.featured,
//         album: r
//     }
//     const id = req.body.
// })
// PUT 
// router.get('/update', songCtrl.update)
	
module.exports = router;
