var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var game_controller = require('../controllers/game'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Game ROUTES /// 
 
// POST request for creating a Game.  
router.post('/games', game_controller.game_create_post); 
 
// DELETE request to delete Game. 
router.delete('/games/:id', game_controller.game_delete); 
 
// PUT request to update Game. 
router.put('/games/:id', game_controller.game_update_put); 
 
// GET request for one Game. 
router.get('/games/:id', game_controller.game_detail); 
 
// GET request for list of all Game items. 
router.get('/games', game_controller.game_list); 
 
module.exports = router; 
 