const mongoose = require("mongoose") 
const gameSchema = mongoose.Schema({ 
 game_name: String, 
 genre: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Game", 
gameSchema)