const ItemService = require('../services/item.service')
module.exports = {

    addNewItem (req, res) {
        
        const { eventId, itemName, assignedTo, category, amountDesired, amountCommitted } = req.body;
        

        ItemService.add( eventId, itemName, assignedTo, category, amountDesired, amountCommitted,  response => {
            res.json({ response });
        })
        
    },

    patchAssignedTo(req, res) {
        const id = req.params.id;
        console.log("req.params.id = " + id)
        const {toBeAssignedTo} = req.body
        console.log("req.body = " + toBeAssignedTo)

        ItemService.editItemAssignedTo(id, toBeAssignedTo, response => {
            res.json({ response })
            console.log(response)
        })
    },

    patchItemName(req, res) {
        const id = req.params.id;
        const {itemName} = req.body
        ItemService.editItemName(id, itemName, response => {
            res.json({response})
        })
    },

    getAllItems (req, res) {
        ItemService.findAll(items => {
            res.json({ items });
        })
    },

    getItemById (req, res) {
        const id = req.params.id;
        ItemService.findById(id, item => {
            res.json({ item })
        })
    },

}