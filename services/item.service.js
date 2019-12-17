const ItemModel = require('../models/item.model')
const EventService = require('../services/event.service')

module.exports = {

    add(eventId, itemName, assignedTo, category, amountDesired, amountCommitted, callback) {
            const newItem = new ItemModel({itemName, assignedTo, category, amountDesired, amountCommitted});
            
            newItem.save()
            .then(EventService.findById(eventId, event => {
                event.items.push(newItem)
                event.save()
            }))
            .then(callback);
    },
 
    editItemAssignedTo(itemId, userId, callback) {     
            const Item = ItemModel.findById(itemId); // need the entire model?
            Item.findOneAndUpdate(itemId, { assignedTo: userId }, {new: true})
            .then(callback)   
// === Might be unecessary == Pushes to User array ==
// .then( UserModel.findById(userId).then( user => {
//         const _id = mongoose.Types.ObjectId(itemId)
//         if (!user.assignedItems.includes(_id)) {
//             user.assignedItems.push( _id )
//             user.save()
//             console.log(user.assignedItems)}}))             
    },

    editItemName(itemId, newName, callback) {
        const Item = ItemModel.findById(itemId);
        Item.updateOne({ itemName: newName })
        .then(callback)
    },

    findAll(callback) {
        ItemModel.find()
        .then(callback);
    },

    findById(itemId, callback) {
        ItemModel.findById(itemId)
        .then(callback)
    },


}








//itemName, assignedTo, category