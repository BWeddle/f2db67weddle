var express = require('express');
const game_controlers = require('../controllers/game'); 
var router = express.Router();

/* GET games. */
router.get('/', game_controlers.game_view_all_Page);

/* GET detail game page */ 
router.get('/detail', game_controlers.game_view_one_Page);

/* GET create game page */ 
router.get('/create', game_controlers.game_create_Page);

module.exports = router;
