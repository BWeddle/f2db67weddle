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
exports.game_detail = async function(req, res) { 
    console.log("detail" + req.params.id)
    try{
        result = await Game.findById(req.params.id)
        res.send(result);
    } catch (error){
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
}; 
 
// Handle Game create on POST. 
exports.game_create_post = async function(req, res) { 
    console.log(req.body)
    let document = new Game();
    document.game_name = req.body.game_name;
    document.genre = req.body.genre;
    document.cost = req.body.cost;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// Handle Game delete form on DELETE. 
exports.game_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game delete DELETE ' + req.params.id); 
}; 
 
// Handle Game update form on PUT. 
exports.game_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.game_view_all_Page = async function(req, res) { 
    try{ 
        theGames = await Game.find(); 
        res.render('games', { title: 'Game Search Results', results: theGames }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 