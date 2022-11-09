var Game = require('../models/game'); 

// List of all Games 
exports.game_list = async function(req, res) { 
    try{ 
        theGames = await Game.find(); 
        res.send(theGames); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Game. 
exports.game_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id); 
}; 
 
// Handle Game create on POST. 
exports.game_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game create POST'); 
}; 
 
// Handle Game delete form on DELETE. 
exports.game_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game delete DELETE ' + req.params.id); 
}; 
 
// Handle Game update form on PUT. 
exports.game_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game update PUT' + req.params.id); 
}; 