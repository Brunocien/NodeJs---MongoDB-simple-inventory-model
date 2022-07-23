import items from "../models/Item.js";

class ItemController {
    static getAllItems = (req,res) => {
        items.find().populate('adressedTo')
        .exec((err, items) => {
            res.status(200).json(items)
        })
    }
    static updateItemById = (req,res) => {
        let id = req.params.id

        items.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            !err ? res.status(200).send({message: "Item updated successfuly"}) : res
            .status(500).send(` ${err.message} - Could not update item`);
        })
    }
    static addItem = (req,res) => {
        let newItem = new items(req.body)

        newItem.save((err) => {
            !err ? res.status(201).send(newItem.toJSON()) : res
            .status(500).send(` ${err.message} - Couldn't add`)
        })
    }
    static deleteItem = (req,res) => {
        let id = req.params.id;

        items.findByIdAndDelete(id, (err) => {
            !err ? res.status(200).send({message: "Item deleted"}) : res
            .status(500).send(`${err.message} - Couldn't delete item`)
        })
    }
}

export default ItemController;