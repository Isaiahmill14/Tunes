const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST /songs/:id/reviews 
router.post('/songs/:id/reviews', reviewsCtrl.create);

module.exports = router;