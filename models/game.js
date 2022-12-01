const mongoose = require("mongoose") 
const gameSchema = mongoose.Schema({ 
 game_name: String, 
 genre: String, 
 cost: {
    type: Number,
    length: {
        minimum: 1,
        maximum: 150
    }
 }
}) 


 
module.exports = mongoose.model("Game", gameSchema)