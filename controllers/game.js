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
exports.game_delete = async function(req, res) {
    console.log("delete" + req.params.id)
    try{
        result = await Game.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`)
    }
}; 
 
// Handle Game update form on PUT. 
exports.game_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Game.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.game_name)  
               toUpdate.game_name = req.body.game_name; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.genre) toUpdate.genre = req.body.genre; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

 // Handle a show one view with id specified by query 
 exports.game_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Game.findById( req.query.id) 
        res.render('gamedetail', { title: 'Game Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 