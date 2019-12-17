const mongoose = require("mongoose");



const Item = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
    },
    
    amountDesired: Number,
    amountCommitted: Number,

    category: { type: String }
    
    

});
    module.exports = mongoose.model('item', Item);