import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id: {type: "String"},
    name: {type: "String"},
    brand: {type: "String"},
    adressedTo: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}
})

const items = mongoose.model("object", itemSchema);

export default items;